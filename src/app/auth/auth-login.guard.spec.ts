import { TestBed } from '@angular/core/testing';

import { AuthLoginGuard } from './auth-login.guard';

describe('AuthLoginGuard', () => {
  let guard: AuthLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthLoginGuard
      ],
    });
    guard = TestBed.inject(AuthLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
