from pathlib import Path
import subprocess
import os

import shutil

dir_name = './public'
new_dir_name = 'backupImg/public'
root = Path(dir_name)
extName = ".jpeg"

def convertToWebp(path):
  fullpathList = path.split("/")
  filename = fullpathList[-1]
  print(filename)
  print(fullpathList)
  fullpathList = fullpathList[0:len(fullpathList)-1]
  print(fullpathList)
  x = "/".join(fullpathList + [filename])
  y = "/".join(fullpathList + [filename.replace(extName, ".webp")])
  cmd = " ".join(["cwebp -q 80", x, "-o", y])
  print(x)
  print(y)
  print(cmd)
  subprocess.run([cmd], shell=True)

def movefile(path):
  fullpathList = path.split("/")
  folderName = fullpathList[0]
  fullpathList = fullpathList[1:len(fullpathList)]
  folderPathList = fullpathList[0:len(fullpathList) - 1]
  x = "/".join([folderName] + fullpathList)
  y = "/".join([new_dir_name] + fullpathList)
  folder = "/".join([new_dir_name] + folderPathList);
  destination_dir = Path(folder)
  print(x, "->", y)
  destination_dir.mkdir(parents=True, exist_ok=True)
  shutil.move(x, y)

cnt = 0;
for path in root.rglob("*" + extName):
  fullpath = path._raw_paths[0]
  # convertToWebp(fullpath)
  movefile(fullpath)
  cnt += 1

print(cnt)

