function toSecond (time) {
    const [min, sec] = time.split(":").map(Number);
    return min*60 + sec;
}

function solution(video_len, pos, op_start, op_end, commands) {
    let posTime = toSecond(pos);
    const opsTime = toSecond(op_start);
    const opeTime = toSecond(op_end);
    const videoTime = toSecond(video_len);
    
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