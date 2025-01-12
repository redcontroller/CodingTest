function solution(bandage, health, attacks) {
    let hp = health;
    const maxHealth = health;
    const [count, x, bonus] = bandage;
    
    let lastAttackTime = 0;
    
    for (const [attackTime, damage] of attacks) {
        const timeDiff = attackTime - lastAttackTime - 1;
        const heal = timeDiff * x + Math.floor(timeDiff/count)*bonus;
        hp = Math.min(hp + heal, maxHealth);
        hp -= damage;
        
        if (hp <= 0) return -1;
        
        lastAttackTime = attackTime;
    }
    
    return hp;
}