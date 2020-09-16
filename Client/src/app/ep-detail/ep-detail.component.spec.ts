import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EpDetailComponent } from "./ep-detail.component";

describe("EpDetailComponent", () => {
  let component: EpDetailComponent;
  let fixture: ComponentFixture<EpDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EpDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
