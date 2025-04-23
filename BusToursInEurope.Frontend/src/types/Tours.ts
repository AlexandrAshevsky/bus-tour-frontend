import { BusDto } from './Buses';
import { ReservationDto } from './Reservations';
import { ReviewDto } from './Reviews';
import { RouteBusDto } from './Routes';

export interface CreateTourDto {
  id: number;
  name: string | null;
  price: number;
  startDate: string;
  endDate: string;
  numOfSeats: number;
  description: string | null;
  busDto: number;
  routeBusDto: number;
}

export interface UpdateTourDto {
  name: string | null;
  price: number;
  startDate: string;
  endDate: string;
  route: string | null;
  numOfSeats: number;
  description: string | null;
}

export interface ShortTourDto {
  id: number;
  name: string | null;
  price: number;
  startDate: string;
}

export interface FullTourDto {
  id: number;
  name: string | null;
  price: number;
  startDate: string;
  endDate: string;
  numOfSeats: number;
  description: string | null;
  busDto: BusDto;
  routeBusDto: RouteBusDto;
  reservationsDto: ReservationDto[] | null;
  reviewsDto: ReviewDto[] | null;
}