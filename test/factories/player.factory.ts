import { factory } from 'factory-girl';
import * as faker from 'faker';

import { CreatePlayerDto } from '@player/dto/create-player.dto';
import { UpdatePlayerDto } from '@player/dto/update-player.dto';
import { Player } from '@player/entities/player.entity';
import { Position } from '@player/enums/poisition.enum';
import { PreferredFoot } from '@player/enums/preferred-foot.enum';
import { ICreatePlayer } from '@player/interfaces/create-player.interface';
import { IPlayer } from '@player/interfaces/player.interface';
import { IUpdatePlayer } from '@player/interfaces/update-player.interface';
import { DateHelper } from '@shared/helpers/date.helper';

factory.define<IPlayer>('Player', Player, {
    id: faker.random.number(),
    firstName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    lastName: faker.name.lastName(),
    knownby: faker.name.findName(),
    pictureURL: faker.image.imageUrl(),
    height: faker.random.number(),
    birthdate: DateHelper.parseFromJsDate(faker.date.past()),
    shirtNumber: faker.random.number(),
    position: faker.random.arrayElement([
        'Goalkeeper',
        'Defender',
        'Midfielder',
        'Foward',
    ]) as Position,
    preferredFoot: faker.random.arrayElement(['Left', 'Right', 'Both']) as PreferredFoot,
    createdAt: DateHelper.now(),
    updatedAt: null,
});

factory.define<ICreatePlayer>('CreatePlayerDto', CreatePlayerDto, {
    firstName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    lastName: faker.name.lastName(),
    knownby: faker.name.findName(),
    pictureURL: faker.image.imageUrl(),
    height: faker.random.number(),
    shirtNumber: faker.random.number(),
    position: faker.random.arrayElement([
        'Goalkeeper',
        'Defender',
        'Midfielder',
        'Foward',
    ]) as Position,
    preferredFoot: faker.random.arrayElement(['Left', 'Right', 'Both']) as PreferredFoot,
    birthdate: DateHelper.parseFromJsDate(faker.date.past()),
});

factory.define<IUpdatePlayer>('UpdatePlayerDto', UpdatePlayerDto, {
    firstName: faker.name.firstName(),
    middleName: faker.name.middleName(),
    lastName: faker.name.lastName(),
    knownby: faker.name.findName(),
    pictureURL: faker.image.imageUrl(),
    height: faker.random.number(),
    shirtNumber: faker.random.number(),
    position: faker.random.arrayElement([
        'Goalkeeper',
        'Defender',
        'Midfielder',
        'Foward',
    ]) as Position,
    preferredFoot: faker.random.arrayElement(['Left', 'Right', 'Both']) as PreferredFoot,
    birthdate: DateHelper.parseFromJsDate(faker.date.past()),
});

export const PlayerFactory = factory;
