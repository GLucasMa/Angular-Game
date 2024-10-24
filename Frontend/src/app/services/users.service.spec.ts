import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });

    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes
  });

  it('should login successfully', () => {
    const mockResponse = { token: '12345' };
    const credentials = { Email: 'test@example.com', Contraseña: '12345' };

    service.login(credentials).subscribe((res) => {
      expect(res.token).toEqual('12345');
    });

    const req = httpMock.expectOne('http://localhost:3000/user/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
