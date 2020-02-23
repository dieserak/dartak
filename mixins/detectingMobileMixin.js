import Vue from 'vue';

const checkViewportState = Vue.observable({
	isMobile: false,
	isTablet: false
});

const handleResize = () => {
	const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

	if (viewportWidth < 1024) {
		checkViewportState.isMobile = true;
		checkViewportState.isTablet = viewportWidth > 720;
	}
	else {
		checkViewportState.isMobile = false;
		checkViewportState.isTablet = false;
	}
};

window.addEventListener('resize', handleResize);
handleResize();

export const detectingMobileMixin = {
	computed: {
		$_isMobile() {
			return checkViewportState.isMobile;
		},
		$_isTablet(){
			return checkViewportState.isTablet;
		}
	}
};