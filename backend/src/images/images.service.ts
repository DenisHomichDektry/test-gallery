import { HttpException, Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImagesService {
  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  async findAll() {
    let images = [];
    let photos = [];

    try {
      images = await fetch(
        'https://my-json-server.typicode.com/icedrone/json-demo-server/images',
      ).then((res) => res.json());
    } catch (error) {
      console.log('Failed to fetch images');
    }
    try {
      photos = await fetch(
        'https://my-json-server.typicode.com/icedrone/json-demo-server/photos',
      ).then((res) => res.json());
    } catch (error) {
      console.log('Failed to fetch photos');
    }

    return images.flat().concat(photos.flat());
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
