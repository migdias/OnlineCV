import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesPublicationsComponent } from './certificates-publications.component';

describe('CertificatesPublicationsComponent', () => {
  let component: CertificatesPublicationsComponent;
  let fixture: ComponentFixture<CertificatesPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatesPublicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatesPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
