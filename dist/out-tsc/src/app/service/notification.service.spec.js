import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';
describe('NotificationService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(NotificationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=notification.service.spec.js.map