import { TestBed } from '@angular/core/testing';

import { CustomChartService } from './custom-chart.service';

describe('CustomChartService', () => {
	beforeEach(() => TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } }));

	it('should be created', () => {
		const service: CustomChartService = TestBed.get(CustomChartService);
		expect(service).toBeTruthy();
	});
});
