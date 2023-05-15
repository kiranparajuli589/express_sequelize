import {
    Table,
    Column,
    Model,
    AutoIncrement,
    PrimaryKey
} from 'sequelize-typescript';
import {HasManyGetAssociationsMixin, ModelAttributeColumnOptions} from 'sequelize';
import Workshop from "./workshop.entity";

@Table({
    updatedAt: false,
})
export default class Event extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column
    declare id: number;

    @Column
    name: string;

    @Column({type: 'datetime'} as ModelAttributeColumnOptions)
    declare createdAt: Date;
}

Event.hasMany(Workshop, {
    sourceKey: 'id',
    foreignKey: 'eventId',
    as: 'workshops'
})
