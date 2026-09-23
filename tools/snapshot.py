"""Save a code baseline and non-secret asset hashes outside the web root."""
from pathlib import Path
import hashlib
import json
import sys
import zipfile

root = Path(__file__).resolve().parents[1]
destination = Path(sys.argv[1]).resolve()
destination.mkdir(parents=True, exist_ok=True)
archive = destination / 'source-baseline.zip'
if archive.exists():
    raise SystemExit('Refusing to overwrite the original baseline')
manifest = {}
with zipfile.ZipFile(archive, 'x', zipfile.ZIP_DEFLATED) as out:
    for name in ('ohmylms', 'creatorlms-qpay', 'creatorlms-custom-question'):
        for path in (root.parent / name).rglob('*'):
            if not path.is_file() or any(part in ('node_modules', '.git', 'build') for part in path.parts):
                continue
            relative = path.relative_to(root.parent).as_posix()
            out.write(path, relative)
            if name == 'ohmylms' and 'assets' in path.parts:
                data = path.read_bytes()
                manifest[relative.removeprefix('ohmylms/')] = {'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()}
(root / 'tests' / 'baseline-assets.json').write_text(json.dumps(manifest, indent=2) + '\n', encoding='utf-8')
print(f'Snapshotted code and {len(manifest)} asset hashes into {destination}')
