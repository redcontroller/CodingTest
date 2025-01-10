function solution(video_len, pos, op_start, op_end, commands) {
    const [posMin, posSec] = pos.split(":").map(Number);
    const [opsMin, opsSec] = op_start.split(":").map(Number);
    const [opeMin, opeSec] = op_end.split(":").map(Number);
    let [lenMin, lenSec] = video_len.split(":").map(Number);
    let posTime = posMin*60 + posSec;
    const opsTime = opsMin*60 + opsSec;
    const opeTime = opeMin*60 + opeSec;
    const videoTime = lenMin*60 + lenSec;
    
    for (const command of commands) {
        if (opsTime <=  posTime && posTime <= opeTime) {
            posTime = opeTime;
        }
        
        if (command === "next") {
            if (posTime > videoTime - 10) {
                posTime = videoTime;
            } else {
                posTime += 10;
            }
        } else if (command === "prev") {
            if (posTime < 10) {
                posTime = 0;
            } else {
                posTime -= 10;
            }
        }
    }
    
    if (opsTime <=  posTime && posTime <= opeTime) {
        posTime = opeTime;
    }
    
    const min = String(Math.floor(posTime/60)).padStart(2, '0');
    const sec = String(posTime%60).padStart(2, '0');
    return `${min}:${sec}`;  
}