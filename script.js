let currentUser = 0;
let isMusicMode = false;
const allPalettes = [
    { base: '#040209', colors: ['#ff0055', '#00ffcc', '#9900ff', '#ffaa00'] },
    { base: '#01030d', colors: ['#0072ff', '#00f6ff', '#7000ff', '#ff00aa'] },
    { base: '#010501', colors: ['#00ff66', '#a8ff78', '#78ffd6', '#0052d4'] },
    { base: '#090202', colors: ['#ff3300', '#ff0055', '#ffcc00', '#9900ff'] },
    { base: '#020709', colors: ['#00f2fe', '#4facfe', '#0000ff', '#00ffcc'] },
    { base: '#06010a', colors: ['#b92b27', '#1565c0', '#7000ff', '#ff007f'] },
    { base: '#030303', colors: ['#ea00d9', '#711c91', '#0abdc6', '#091833'] },
    { base: '#05020c', colors: ['#fe5f75', '#fc9842', '#ff0055', '#7a00ff'] },
    { base: '#010604', colors: ['#00ffcc', '#38ef7d', '#11998e', '#00f6ff'] },
    { base: '#040209', colors: ['#ff0055', '#38ef7d', '#0072ff', '#ffaa00'] }, 
    { base: '#040209', colors: ['#00f6ff', '#ff007f', '#7000ff', '#00ffcc'] },
    { base: '#040209', colors: ['#ff5e00', '#ff0055', '#ffcc00', '#ff00ff'] },
    { base: '#040209', colors: ['#11998e', '#38ef7d', '#00ffcc', '#0072ff'] },
    { base: '#040209', colors: ['#7f00ff', '#ff007f', '#ff0055', '#9900ff'] } 
];
const schoolTimeTable = [
    { num: 0, start: "8:00", end: "8:25" },
    { num: 1, start: "2:11", end: "2:12" }, { num: 2, start: "2:13", end: "2:14" },
    { num: 3, start: "10:20", end: "11:00" }, { num: 4, start: "11:10", end: "11:50" },
    { num: 5, start: "12:10", end: "12:50" }, { num: 6, start: "13:10", end: "13:50" },
    { num: 7, start: "14:00", end: "14:40" }, { num: 8, start: "14:50", end: "15:30" }
];
const musicTimeTable = [
    { num: 1, start: "17:00", end: "17:40" }, { num: 2, start: "17:50", end: "18:30" },
    { num: 3, start: "18:40", end: "19:20" }, { num: 4, start: "19:30", end: "20:10" }
];
const schoolSchedules = [
    {
        1: { name: "Понедельник", short: "Пн", lessons: { 0: "Разговоры о важном", 1: "Физика", 2: "Литература", 3: "История", 4: "Алгебра", 5: "Вероятность", 6: "Физкультура", 7: "Информатика" }, rooms: {0:"301", 1:"301", 2:"308", 3:"210", 4:"313", 5:"313", 6:"Спортзал", 7:"301"} },
        2: { name: "Вторник", short: "Вт", lessons: { 2: "География", 3: "Труд", 4: "История", 5: "Русский язык", 6: "Музыка", 7: "Алгебра", 8: "Геометрия" }, rooms: {2:"306", 3:"201", 4:"210", 5:"308", 6:"303", 7:"313", 8:"313"} },
        3: { name: "Среда", short: "Ср", lessons: { 1: "ОБЗР", 2: "Биология", 3: "Физкультура", 4: "Английский язык", 5: "Физика", 6: "География" }, rooms: {1:"203", 2:"306", 3:"Спортзал", 4:"305", 5:"301", 6:"306"} },
        4: { name: "Четверг", short: "Чт", lessons: { 3: "Биология", 4: "Английский язык", 5: "История", 6: "Русский язык", 7: "Химия" }, rooms: {3:"203", 4:"305", 5:"210", 6:"308", 7:"316"} },
        5: { name: "Пятница", short: "Пт", lessons: { 3: "Химия", 4: "Алгебра", 5: "Русский язык", 6: "Английский язык", 7: "Литература", 8: "Геометрия" }, rooms: {3:"316", 4:"313", 5:"308", 6:"305", 7:"308", 8:"313"} },
        6: { name: "Суббота", short: "Сб", lessons: { 1: "Литература", 2: "Геометрия" }, rooms: {1:"308", 2:"313"} }
    },
    {
        1: { name: "Понедельник", short: "Пн", lessons: { 0: "Разговоры о важном", 1: "Русский язык", 2: "Математика", 3: "Физкультура", 4: "Биология", 5: "География", 6: "Английский язык" }, rooms: {} },
        2: { name: "Вторник", short: "Вт", lessons: { 1: "Труд (технология)", 2: "Труд (технология)", 3: "Математика", 4: "Русский язык", 5: "Литература", 6: "История" }, rooms: {} },
        3: { name: "Среда", short: "Ср", lessons: { 1: "Русский язык", 2: "Математика", 3: "История", 4: "Физкультура", 5: "Литература" }, rooms: {} },
        4: { name: "Четверг", short: "Чт", lessons: { 1: "Музыка", 2: "Русский язык", 3: "Математика", 4: "ИЗО", 5: "Литература" }, rooms: {} },
        5: { name: "Пятница", short: "Пт", lessons: { 1: "Английский язык", 2: "История", 3: "Русский язык", 4: "Математика" }, rooms: {} },
        6: { name: "Суббота", short: "Сб", lessons: { 1: "Литература", 2: "Геометрия" }, rooms: {} }
    }
];
const musicSchedules = [
    {
        1: { name: "Понедельник", short: "Пн", lessons: { 1: "Муз. литература", 2: "Сольфеджио" }, rooms: {1:"Муз-1", 2:"Муз-2"} },
        2: { name: "Вторник", short: "Вт", lessons: { 1: "Специальность", 2: "Ансамбль" }, rooms: {1:"Муз-Класс"} },
        3: { name: "Среда", short: "Ср", lessons: { 2: "Оркестр", 3: "Сольфеджио" }, rooms: {2:"Актовый зал"} },
        4: { name: "Четверг", short: "Чт", lessons: { 1: "Специальность" }, rooms: {1:"Муз-Класс"} },
        5: { name: "Пятница", short: "Пт", lessons: { 2: "Муз. литература", 3: "Ансамбль" }, rooms: {2:"Муз-1"} },
        6: { name: "Суббота", short: "Сб", lessons: { 1: "Сольфеджио", 2: "Оркестр" }, rooms: {1:"Муз-2", 2:"Актовый зал"} }
    },
    {
        1: { name: "Понедельник", short: "Пн", lessons: { 2: "Специальность", 3: "Ансамбль" }, rooms: {} },
        2: { name: "Вторник", short: "Вт", lessons: { 1: "Сольфеджио", 2: "Муз. литература" }, rooms: {} },
        3: { name: "Среда", short: "Ср", lessons: { 1: "Ансамбль", 2: "Оркестр" }, rooms: {} },
        4: { name: "Четверг", short: "Чт", lessons: { 2: "Специальность" }, rooms: {} },
        5: { name: "Пятница", short: "Пт", lessons: { 1: "Сольфеджио", 3: "Оркестр" }, rooms: {} },
        6: { name: "Суббота", short: "Сб", lessons: { 2: "Муз. литература", 3: "Специальность" }, rooms: {} }
    }
];
let timeTable = schoolTimeTable; let schedules = schoolSchedules;
const canvas = document.getElementById('bg-canvas'); const ctx = canvas.getContext('2d');
const swiper = document.getElementById('swiper'); const pullIndicator = document.getElementById('pull-indicator'); const pullSvg = document.getElementById('pull-svg');
let startX = 0, startY = 0, currentTranslate = 0, prevTranslate = 0, isDragging = false, currentIdx = 0, dragDirection = null, lastHeartbeat = Date.now(), activePalette = null;
let blobs = [], mouse = { x: null, y: null, targetX: null, targetY: null, active: false };
let matrixScale = 1, startHypot = 0, isZuming = false, lastTapTime = 0, panX = 0, panY = 0, startPanX = 0, startPanY = 0, isPanning = false, gyroX = 0, gyroY = 0;
let currentPullDistance = 0;
const currentHour = new Date().getHours(); document.documentElement.setAttribute('data-theme', (currentHour < 7 || currentHour >= 19) ? 'dark' : 'light');
function parseTime(tStr) { let [h, m] = tStr.split(':').map(Number); return h * 60 + m; }
function formatTimeLeft(totalSecs) { if (totalSecs <= 0) return "0 сек"; if (totalSecs < 60) return `${totalSecs} сек`; const totalMins = Math.ceil(totalSecs / 60); if (totalMins < 60) return `${totalMins} мин.`; return `${Math.floor(totalMins / 60)} ч. ${totalMins % 60} мин.`; }
function selectRandomPalette() {
    activePalette = allPalettes[Math.floor(Math.random() * allPalettes.length)];
    const soloColor = activePalette.colors[0]; const secondaryColor = activePalette.colors[1] || activePalette.colors[0];
    document.documentElement.style.setProperty('--accent', soloColor); document.documentElement.style.setProperty('--neon-glow', soloColor + '66');
    document.documentElement.style.setProperty('--chiiil-grad', `linear-gradient(90deg, ${soloColor}, ${secondaryColor})`); initBlobs();
}
function initBlobs() {
    blobs = []; for (let i = 0; i < 5; i++) { blobs.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15, radius: Math.random() * (canvas.width * 0.7) + canvas.width * 0.5, color: activePalette.colors[i % activePalette.colors.length] }); }
}
function renderLoop() {
    if (!activePalette) selectRandomPalette();
    ctx.globalCompositeOperation = 'source-over'; ctx.fillStyle = activePalette.base + '25'; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'screen';
    blobs.forEach((blob) => {
        blob.x += blob.vx; blob.y += blob.vy; if (blob.x < -100 || blob.x > canvas.width + 100) blob.vx *= -1; if (blob.y < -100 || blob.y > canvas.height + 100) blob.vy *= -1;
        ctx.save(); let radialGrad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius); radialGrad.addColorStop(0, blob.color + '99'); radialGrad.addColorStop(0.3, blob.color + '22'); radialGrad.addColorStop(1, 'transparent'); ctx.fillStyle = radialGrad; ctx.beginPath(); ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2); ctx.fill(); ctx.restore();
    });
    requestAnimationFrame(renderLoop);
}
function updateMousePos(e) {
    const rect = canvas.getBoundingClientRect(); const clientX = e.touches && e.touches.length ? e.touches.clientX : e.clientX; const clientY = e.touches && e.touches.length ? e.touches.clientY : e.clientY;
    mouse.targetX = (clientX - rect.left) * (canvas.width / rect.width); mouse.targetY = (clientY - rect.top) * (canvas.height / rect.height);
}
window.addEventListener('deviceorientation', e => {
    if (!e.gamma || !e.beta) return;
    gyroY = Math.min(Math.max(e.gamma / 1.5, -15), 15); gyroX = Math.min(Math.max((e.beta - 50) / 1.5, -15), 15);
    document.querySelectorAll('.timer-card, .day-schedule-box, .week-matrix-box').forEach(card => { card.style.transform = `rotateX(${gyroX}deg) rotateY(${gyroY}deg) translateZ(10px)`; });
});
window.addEventListener('touchstart', e => { 
    if(e.target.closest('.navigation-tabs') || e.target.closest('#music-toggle-btn')) return;
    if (e.touches.length === 2 && currentIdx === 1 && e.target.closest('.week-matrix-box')) {
        isZuming = true; isPanning = false; isDragging = false; const grid = document.getElementById('matrix-grid'); grid.style.transition = 'none';
        let rect = grid.getBoundingClientRect(); let midX = ((e.touches.clientX + e.touches.clientX) / 2) - rect.left; let midY = ((e.touches.clientY + e.touches.clientY) / 2) - rect.top;
        grid.style.transformOrigin = `${midX}px ${midY}px`; startHypot = Math.hypot(e.touches.clientX - e.touches.clientX, e.touches.clientY - e.touches.clientY); return;
    }
    if (e.touches.length === 1) {
        if (currentIdx === 1 && e.target.closest('.week-matrix-box') && matrixScale > 1.05) { isPanning = true; isDragging = false; startPanX = e.touches.clientX - panX; startPanY = e.touches.clientY - panY; return; }
        isDragging = true; dragDirection = null; currentPullDistance = 0; pullIndicator.style.transition = 'none'; startX = e.touches.clientX; startY = e.touches.clientY;
        if (!e.target.closest('.lessons-list') && !e.target.closest('.week-matrix-box') && !e.target.closest('.switch-name-link')) { mouse.active = true; updateMousePos(e); }
    }
});
window.addEventListener('touchmove', e => {
    if (isZuming && e.touches.length === 2 && currentIdx === 1) {
        e.preventDefault(); let currentHypot = Math.hypot(e.touches.clientX - e.touches.clientX, e.touches.clientY - e.touches.clientY); let factor = currentHypot / (startHypot || 1); matrixScale = Math.min(Math.max(matrixScale * factor, 1.0), 2.5); 
        document.getElementById('matrix-grid').style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${matrixScale})`; startHypot = currentHypot; return;
    }
    if (isPanning && e.touches.length === 1 && matrixScale > 1.05 && currentIdx === 1) { e.preventDefault(); panX = e.touches.clientX - startPanX; panY = e.touches.clientY - startPanY; document.getElementById('matrix-grid').style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${matrixScale})`; return; }
    if (!isDragging || e.touches.length > 1) return;
    let diffX = e.touches.clientX - startX, diffY = e.touches.clientY - startY;
    if (!dragDirection) { if (Math.abs(diffX) > Math.abs(diffY) + 10) { dragDirection = 'horizontal'; } else if (diffY > 10 && currentIdx === 0 && document.querySelector('.lessons-list').scrollTop <= 1) { dragDirection = 'pull'; } }
    if (dragDirection === 'horizontal') { currentTranslate = prevTranslate + diffX; swiper.style.transform = `translateX(${currentTranslate}px)`; }
    else if (dragDirection === 'pull' && diffY > 0) { e.preventDefault(); currentPullDistance = Math.min(diffY * 0.4, 90); pullIndicator.style.transform = `translate3d(-50%,${currentPullDistance}px, 0)`; pullIndicator.style.opacity = Math.min(currentPullDistance / 50, 1); pullSvg.style.transform = `rotate(${currentPullDistance * 4}deg)`; }
}, { passive: false });
window.addEventListener('touchend', () => {
    isDragging = false; isZuming = false; isPanning = false; mouse.active = false;
    if (dragDirection === 'horizontal') { let movedBy = currentTranslate - prevTranslate; if (movedBy < -80 && currentIdx < 1) currentIdx++; if (movedBy > 80 && currentIdx > 0) currentIdx--; switchScreen(currentIdx); }
    else if (dragDirection === 'pull') { pullIndicator.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'; if (currentPullDistance > 55) { pullIndicator.classList.add('refreshing'); pullIndicator.style.transform = 'translate3d(-50%, 60px, 0)'; setTimeout(() => location.reload(true), 500); } else { pullIndicator.style.transform = 'translate3d(-50%, 0, 0)'; pullIndicator.style.opacity = '0'; } }
    dragDirection = null; currentPullDistance = 0;
});
function switchScreen(index) {
    currentIdx = index; currentTranslate = currentIdx * -window.innerWidth; prevTranslate = currentTranslate;
    const sDay = document.getElementById('slide-day'), sWeek = document.getElementById('slide-week'); sDay.style.transition = sWeek.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'; swiper.style.transform = 'none';
    if (index === 0) { sDay.style.transform = 'translate3d(0,0,0) rotateY(0deg)'; sDay.style.opacity = '1'; sWeek.style.transform = 'translate3d(100%,0,-300px) rotateY(90deg)'; sWeek.style.opacity = '0'; }
    else { sDay.style.transform = 'translate3d(-100%,0,-300px) rotateY(-90deg)'; sDay.style.opacity = '0'; sWeek.style.transform = 'translate3d(-100%,0,0) rotateY(0deg)'; sWeek.style.opacity = '1'; }
    const shift = (document.querySelector('.navigation-tabs').offsetWidth - 12) / 2; document.getElementById('nav-carriage').style.transform = `translateX(${index * shift}px)`;
    document.querySelectorAll('.tab-btn').forEach((btn, i) => btn.classList.toggle('active', i === index));
}
function buildMatrix() {
    const grid = document.getElementById('matrix-grid'); grid.innerHTML = ''; let currentData = schedules[currentUser];
    let corner = document.createElement('div'); corner.className = 'matrix-cell header'; corner.innerText = '№'; grid.appendChild(corner);
    for (let d = 1; d <= 5; d++) { let cell = document.createElement('div'); cell.className = 'matrix-cell header'; cell.innerText = currentData[d] ? currentData[d].short : ''; grid.appendChild(cell); }
    let maxLessons = isMusicMode ? 4 : 8;
    for (let l = (isMusicMode ? 1 : 0); l <= maxLessons; l++) {
        let numCell = document.createElement('div'); numCell.className = 'matrix-cell num-col'; numCell.innerText = l; grid.appendChild(numCell);
        for (let d = 1; d <= 5; d++) {
            let cell = document.createElement('div'); const name = (currentData[d] && currentData[d].lessons) ? currentData[d].lessons[l] : null; cell.className = name ? 'matrix-cell' : 'matrix-cell empty';
            if (name) { cell.innerText = name; if (name.length > 11) cell.style.fontSize = '7px'; if (name.length > 14) cell.style.fontSize = '6px'; } grid.appendChild(cell);
        }
    }
}
window.addEventListener('click', e => { 
    if (e.target.closest('.navigation-tabs') || e.target.closest('.lessons-list')) return; 
    let nameLink = e.target.closest('#user-name-trigger'); if (nameLink) { currentUser = currentUser === 0 ? 1 : 0; nameLink.innerText = currentUser === 0 ? "Кирилла" : "Жени"; buildMatrix(); updateLogic(); return; }
    let toggleBtn = e.target.closest('#music-toggle-btn');
    if (toggleBtn) { isMusicMode = !isMusicMode; toggleBtn.classList.toggle('active', isMusicMode); document.querySelectorAll('.toggle-zone').forEach(z => z.classList.toggle('active', (z.dataset.mode === 'music' && isMusicMode) || (z.dataset.mode === 'school' && !isMusicMode))); timeTable = isMusicMode ? musicTimeTable : schoolTimeTable; schedules = isMusicMode ? musicSchedules : schoolSchedules; buildMatrix(); updateLogic(); return; }
    if (e.target.closest('.week-matrix-box')) { let currentTime = Date.now(); let tapLength = currentTime - lastTapTime; if (tapLength < 300 && tapLength > 0) { matrixScale = 1; panX = 0; panY = 0; const grid = document.getElementById('matrix-grid'); grid.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'; grid.style.transform = 'translate3d(0, 0, 0) scale(1)'; e.preventDefault(); return; } lastTapTime = currentTime; }
    activePalette = null; selectRandomPalette(); 
});
function updateLogic() {
    const now = new Date(); const currentAbsSecs = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds(); const day = now.getDay();
    if (Date.now() - lastHeartbeat > 120000) document.getElementById('outdated-badge').classList.add('show');
    lastHeartbeat = Date.now(); let currentData = schedules[currentUser]; let isWeekend = (day === 0); let targetDay = day;
    if (!isWeekend && currentData[day]) { const lessonKeys = Object.keys(currentData[day].lessons).map(Number); if (lessonKeys.length > 0) { const lastLessonNum = Math.max(...lessonKeys); const tRow = timeTable.find(t => t.num === lastLessonNum); if (tRow && currentAbsSecs > (parseTime(tRow.end) * 60)) { targetDay = day + 1; if (targetDay > 6) targetDay = 1; } } } else if (isWeekend) { targetDay = 1; }
    const isDisplayingToday = (targetDay === day); const activeDayInfo = currentData[targetDay]; const listContainer = document.getElementById('day-lessons'); listContainer.innerHTML = '';
    let activeLessonId = null; let currentStatusText = "Уроки закончены"; let timeDiffText = "--:--"; let subText = "Хорошего отдыха!"; let lessonProgressPercent = 0; let boilStage = "none";
    if (isDisplayingToday && currentData[day] && Object.keys(currentData[day].lessons).length > 0) {
        const todayLessons = currentData[day].lessons; const lessonNums = Object.keys(todayLessons).map(Number); const firstLessonNum = Math.min(...lessonNums); const fRow = timeTable.find(t => t.num === firstLessonNum);
        if (fRow) {
            const firstLessonStartSecs = parseTime(fRow.start) * 60;
            if (currentAbsSecs < firstLessonStartSecs) { let secsLeft = firstLessonStartSecs - currentAbsSecs; currentStatusText = "До начала уроков"; timeDiffText = formatTimeLeft(secsLeft); subText = `Первый урок: ${todayLessons[firstLessonNum]}`; }
            else {
                for (let lNum of lessonNums) { let tBox = timeTable.find(t => t.num === lNum); if(!tBox) continue; let startSecs = parseTime(tBox.start) * 60; let endSecs = parseTime(tBox.end) * 60; if (currentAbsSecs >= startSecs && currentAbsSecs < endSecs) { activeLessonId = lNum; currentStatusText = `Идет урок`; let secsLeft = endSecs - currentAbsSecs; timeDiffText = formatTimeLeft(secsLeft); subText = `До конца урока: ${todayLessons[lNum]}`; lessonProgressPercent = (currentAbsSecs - startSecs) / (endSecs - startSecs); break; } }
                if (activeLessonId === null) {
                    const lessonsKeys = lessonNums.sort((a,b)=>a-b);
                    for (let i = 0; i < lessonsKeys.length - 1; i++) {
                        let cBox = timeTable.find(t => t.num === lessonsKeys[i]); let nBox = timeTable.find(t => t.num === lessonsKeys[i+1]); if(!cBox || !nBox) continue; let currEndSecs = parseTime(cBox.end) * 60; let nextStartSecs = parseTime(nBox.start) * 60;
                        if (currentAbsSecs >= currEndSecs && currentAbsSecs < nextStartSecs) { let breakSecsLeft = nextStartSecs - currentAbsSecs; currentStatusText = "До конца перемены"; timeDiffText = formatTimeLeft(breakSecsLeft); subText = `Следующий: ${todayLessons[lessonsKeys[i+1]]}`; if (breakSecsLeft < 60 && breakSecsLeft >= 40) boilStage = "low"; else if (breakSecsLeft < 40 && breakSecsLeft >= 20) boilStage = "medium"; else if (breakSecsLeft < 20 && breakSecsLeft > 0) boilStage = "max"; break; }
                    }
                }
            }
        }
    }
    const tCard = document.getElementById('timer-card'); const tTime = document.getElementById('timer-time'); if (tCard && tTime) { tCard.classList.remove('break-warning'); tTime.classList.remove('boil-low', 'boil-medium', 'boil-max'); if (boilStage !== "none") { tCard.classList.add('break-warning'); tTime.classList.add(`boil-${boilStage}`); } }
    if (activeLessonId !== null || boilStage !== "none" || (isDisplayingToday && currentData[day] && currentAbsSecs < parseTime(timeTable.find(t=>t.num===Math.min(...Object.keys(currentData[day].lessons).map(Number))).start)*60)) { document.getElementById('timer-label').innerText = currentStatusText; document.getElementById('timer-time').innerHTML = timeDiffText; document.getElementById('timer-sub').innerText = subText; } 
    else { document.getElementById('timer-label').innerText = "Уроки завершены"; let hasMusicToday = (!isWeekend && musicSchedules[currentUser][day] && Object.keys(musicSchedules[currentUser][day].lessons).length > 0); let lastMusicEnd = hasMusicToday ? parseTime(musicTimeTable.find(t=>t.num===Math.max(...Object.keys(musicSchedules[currentUser][day].lessons).map(Number))).end)*60 : 0; let showStamp = (hasMusicToday && currentAbsSecs < lastMusicEnd && !isMusicMode); document.getElementById('timer-time').innerHTML = `<div class="cyber-rest-box"><div class="cyber-rest-status">ЧИИИЛ!!</div>${showStamp ? '<div class="music-stamp-badge">Не забудь про музыкалку!</div>' : ''}</div>`; document.getElementById('timer-sub').innerText = ""; }
    if(activeDayInfo && activeDayInfo.lessons) {
        const activeDayInfoKeys = Object.keys(activeDayInfo.lessons).map(Number).sort((a,b)=>a-b);
        for (let idx = 0; idx < activeDayInfoKeys.length; idx++) {
            const slot = activeDayInfoKeys[idx]; const name = activeDayInfo.lessons[slot]; const row = document.createElement('div'); row.className = `lesson-row ${activeLessonId === slot ? 'active' : ''}`; const currentSlotTime = timeTable.find(t => t.num === slot); let progressHTML = '', roomHTML = '', breakBadgeHTML = ''; if (activeLessonId === slot) { progressHTML = `<div class="lesson-progress-fill" style="width: ${(lessonProgressPercent * 100).toFixed(1)}%"></div>`; } if (activeDayInfo.rooms && activeDayInfo.rooms[slot]) { roomHTML = `<div class="lesson-room-sub">каб. ${activeDayInfo.rooms[slot]}</div>`; }
            if (idx < activeDayInfoKeys.length - 1) {
                const nextSlot = activeDayInfoKeys[idx + 1]; const nextSlotTime = timeTable.find(t => t.num === nextSlot); if (currentSlotTime && nextSlotTime) { let breakStartSecs = parseTime(currentSlotTime.end) * 60; let breakEndSecs = parseTime(nextSlotTime.start) * 60; let breakDurationMins = Math.round((breakEndSecs - breakStartSecs) / 60); if (breakDurationMins > 0) { let arcOffset = 88; let isThisBreakNow = (isDisplayingToday && currentAbsSecs >= breakStartSecs && currentAbsSecs < breakEndSecs); let currentOffset = arcOffset; if (isThisBreakNow) { let passed = currentAbsSecs - breakStartSecs; let total = breakEndSecs - breakStartSecs; currentOffset = arcOffset - (arcOffset * (passed / total)); } breakBadgeHTML = `<div class="break-radial-container"><svg class="break-radial-svg" viewBox="0 0 32 32"><circle class="break-radial-bg" cx="16" cy="16" r="14"/><circle class="break-radial-track" cx="16" cy="16" r="14" stroke-dasharray="${arcOffset}" stroke-dashoffset="${currentOffset}"/></svg><span class="break-radial-num">${breakDurationMins}</span></div>`; } }
            } else { breakBadgeHTML = `<div class="break-radial-spacer"></div>`; }
            let displayTimeStr = "--:--"; if (currentSlotTime) { let [hStr, mStr] = currentSlotTime.start.split(':'); displayTimeStr = `${parseInt(hStr, 10)}:${mStr}`; } row.innerHTML = `${progressHTML}<div class="lesson-num-zone">${slot}</div><div class="lesson-time-zone">${displayTimeStr}</div><div class="lesson-content-zone"><div class="lesson-name">${name}</div>${roomHTML}</div><div class="lesson-break-zone">${breakBadgeHTML}</div>`; listContainer.appendChild(row);
        }
    }
    let el = document.getElementById('day-title'); if(el && activeDayInfo){ let txt=""; if(isDisplayingToday){ txt=`Расписание на сегодня. ${activeDayInfo.name}`; }else{ if(day>=1&&day<=4){ txt=`Расписание на завтра. ${activeDayInfo.name}`; }else{ txt=`Расписание на понедельник`; } } el.innerText=txt; }
    let ch = document.querySelector('.cyber-rest-status'); if(ch && activePalette){ const soloColor = activePalette.colors[0]; const secondaryColor = activePalette.colors[1] || activePalette.colors[0]; ch.style.setProperty('--chiiil-grad', `linear-gradient(90deg, ${soloColor}, ${secondaryColor})`); }
}
function resizeCanvas() { canvas.width = window.innerWidth * 1.2; canvas.height = window.innerHeight * 1.2; }
buildMatrix(); resizeCanvas(); selectRandomPalette(); updateLogic(); setInterval(updateLogic, 1000); window.addEventListener('resize', resizeCanvas); renderLoop();
