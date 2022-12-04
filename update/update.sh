n="sillyGirl"
s="/usr/local/$n"
a=arm64
if [[ $(uname -a | grep "x86_64") != "" ]]; then 
    a=amd64
fi ;
if [ ! -d $s ]; then 
    mkdir $s
fi ;
cd $s;
rm -rf $n;
v=`curl https://gitlab.com/cdle/$a/-/raw/main/compile_time.go --silent | tr -cd "[0-9]"`
d=""
if [ ${#v} == 13 ]; then
    d="https://gitlab.com/cdle/${a}/-/raw/main/sillyGirl_linux_${a}_${v}"
else
    v=`curl http://gitproxy.mikutechnology.ml/https://raw.githubusercontent.com/cdle/binary/main/compile_time.go --silent | tr -cd "[0-9]"`
    if [ ${#v} == 13 ]; then
        d="http://gitproxy.mikutechnology.ml/https://raw.githubusercontent.com/cdle/binary/main/sillyGirl_linux_${a}_${v}"
    else
        echo "Sorry，你网不好！"
        exit
    fi
fi
echo "检测到新版本 $v"
echo "发现新版本，正在停止守护程序..."
pm2 stop 0
echo "正在备份当前版本..."
cd /volume1/data/backup/sillyGirl && mkdir $(date +%Y-%m-%d) && cd $(date +%Y-%m-%d) && cp /volume1/data/sillyGirl/sillyGirl /volume1/data/backup/sillyGirl/$(date +%Y-%m-%d)
bash /volume1/data/backup/testing.sh
echo "正在从 $d 下载..."
curl -o $n $d && chmod 777 $n
echo "已下载到初始目录，开始转移到运行目录..."
cp $n /volume1/data/sillyGirl && cd /volume1/data/sillyGirl
echo "转移完毕，正在启动守护程序..."
pm2 start "./$n" && pm2 logs