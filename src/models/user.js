const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConnect");
const Roles = require("./roles");

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        verify_account_token:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        verify_account_token_expires:{
            type: DataTypes.DATE,
            allowNull: true,
        },
        reset_password_token:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Roles,
                key: "id",
            },
            defaultValue:3,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        updated_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        deleted_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        tableName: "users",
        paranoid: true,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        hooks: {
            beforeCreate: (user) => {
              user.updated_at=null;
            },
        },
    }
);

module.exports = User;