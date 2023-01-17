import { Injectable, BadGatewayException, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IBaseService } from './ibase.service';

@Injectable()
export abstract class BaseService<T> implements IBaseService<T> {
  constructor(private readonly genericRepository: Repository<T>) {}

  findAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.find();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  findOne(id: number): Promise<T> {
    try {
      return <Promise<T>>this.genericRepository.findOne(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async update(id: number, entity: T): Promise<any> {
    try {
      const responseAux: Object = await this.genericRepository.findOne(id);
      if (responseAux == null) throw new NotFoundException('El id no existe');

      entity['id'] = Number(id);
      let mergeEntity: any = Object.assign(responseAux, entity);
      const response: T = await this.genericRepository.save(mergeEntity);

      return response;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async save(entity: T): Promise<T> {
    try {
      const response: T = await this.genericRepository.save(entity);
      return response;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  delete(id: number) {
    try {
      this.genericRepository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
