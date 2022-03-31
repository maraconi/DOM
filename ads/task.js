let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let caseIndex = 0;

function rotator () {
	for (let i = 0; i < rotatorCase.length; i++) {
		rotatorCase[i].classList.remove('rotator__case_active');
	}
	rotatorCase[caseIndex].classList.add('rotator__case_active');
	if(caseIndex + 1 == rotatorCase.length) {
        caseIndex = 0;
    } else {
        caseIndex++;
    }
}
setInterval(rotator, 1000);