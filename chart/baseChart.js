// 자바스크립트 프로젝트 구현 - 인바디 다이어리 (baseChart.js)


class BaseChart {
	constructor(canvasContext, type, labels, datasets, options, plugins) {
		const data = {
			labels,
			datasets
		};

		const config = {
			type,
			data,
			options,
			plugins
		};

		this.chart = new Chart(canvasContext, config);
	}

	// 라벨들을 변경함
	changeLabels = (labels) => {
		this.chart.config.data.labels = labels;
	};

	// 값들을 변경함
	changeValues = (index, values) => {
		this.chart.config.data.datasets[index].data = values;
	};

	// 업데이트함
	update = () => {
		this.chart.update();
	};
}