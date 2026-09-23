"""Create an empty build workspace with source only, never shipped output."""
from pathlib import Path
import shutil
import sys
import os
root=Path(__file__).resolve().parents[1]
destination=Path(sys.argv[1]).resolve()
if destination.exists(): raise SystemExit('Refusing to overwrite a clean-build workspace')
destination.mkdir(parents=True)
if os.name=='nt': destination=Path('\\\\?\\'+str(destination))
for name in ('package.json','package-lock.json','.nvmrc','webpack.config.cjs'):
    shutil.copy2(root/name,destination/name)
for name in ('assets/src','tools'):
    shutil.copytree(root/name,destination/name)
print('Source-only build workspace:',destination)
