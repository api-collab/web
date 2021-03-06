import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiInfoService } from '../core/services/api-info/api-info.service';
import { NotificationService } from '../core/services/notification/notification.service';
import { SharedModule } from './../shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiPageComponent } from './api-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockDummyService extends ApiInfoService {
  // mock everything used by the component
}

describe('ApiPageComponent', () => {
  let component: ApiPageComponent;
  let fixture: ComponentFixture<ApiPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule, BrowserAnimationsModule],
      declarations: [ApiPageComponent],
      providers: [
        {
          provide: ApiInfoService,
          useClass: MockDummyService
        },
        NotificationService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
