import {
  inject,
  async,
  TestBed,
  ComponentFixture,
  getTestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerService } from './customer.service';

describe('Title', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService]
    });
  });

  it('should have http', inject([CustomerService], (customerService: CustomerService) => {
    expect(!!customerService.http).toEqual(true);
  }));

  it('should get data from the server',
    inject([CustomerService], (customerService: CustomerService) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    customerService.getCustomerData();
    expect(console.log).toHaveBeenCalled();
    customerService.getCustomerData().subscribe( (result) => {
      expect(result).toEqual({ value: 'AngularClass' });
    });
  }));

});
