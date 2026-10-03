"""Create a separate review repository without touching the shared Git index."""
from pathlib import Path
import shutil
import subprocess
import sys
import os
import zipfile

root = Path(__file__).resolve().parents[1]
archive, destination = map(lambda p: Path(p).resolve(), sys.argv[1:3])
refresh = '--refresh' in sys.argv[3:]
if destination.exists() and not refresh:
    raise SystemExit('Refusing to overwrite an existing review repository')
if not refresh: destination.mkdir(parents=True)
with zipfile.ZipFile(archive) as snapshot:
    for name in snapshot.namelist():
        target = (destination / name).resolve()
        if not target.is_relative_to(destination):
            raise SystemExit('Unsafe snapshot entry')
        if name.endswith(('.sql', '.env', '.pem', '.key')) or 'credentials' in name.lower():
            raise SystemExit('Sensitive snapshot entry; inspect before continuing')
    if not refresh: snapshot.extractall(destination)
def git(*args):
    return subprocess.check_output(['git', '-C', str(destination), *args], text=True, stderr=subprocess.STDOUT)
if refresh:
    if git('log','-1','--format=%s').strip() != 'Installed OhMyLMS source-recovery baseline':
        raise SystemExit('Refusing to refresh an unrelated review repository')
else:
    git('init', '-b', 'codex/source-recovery')
    git('config', 'core.longpaths', 'true')
    git('add', '.')
    git('-c', 'user.name=Codex', '-c', 'user.email=codex@localhost', 'commit', '-m', 'Installed OhMyLMS source-recovery baseline')
baseline = git('rev-parse', 'HEAD').strip()
for plugin in ('ohmylms', 'ohmylms-qpay', 'ohmylms-custom-question'):
    target=destination/plugin
    if os.name=='nt': target=Path('\\\\?\\'+str(target))
    shutil.copytree(root.parent/plugin, target, dirs_exist_ok=True,
                    ignore=shutil.ignore_patterns('.git', 'node_modules', 'build', 'test-results', 'playwright-report', 'coverage', '.env*', '*.log', '*.sql'))
git('add', '.')
print('Review repository:', destination)
print('Baseline commit:', baseline)
print('Current implementation is staged for git diff --cached.')
