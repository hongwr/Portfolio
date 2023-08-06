'use strict';

const sectionIds = ['#home', '#about', '#skills', '#work', '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(() => false);

const options = {
    rootMargin: '-20% 0px 0px 0px',
    threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
    let selectLastOne;
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`);
        visibleSections[index] = entry.isIntersecting;
        selectLastOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.98;
    });
    console.log(visibleSections);
    console.log('무조건 라스트 섹션!!', selectLastOne);

    const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections);
    console.log(sectionIds[navIndex]);
}

function findFirstIntersecting(intersections) {
    const index = intersections.indexOf(true);
    console.log('첫번째 인덱스', index);
    return index >= 0 ? index : 0;
}
