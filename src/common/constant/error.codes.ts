export enum ErrorCodes {
    UnknownError = 10000,
    ValidationError = 11000,

    AdminAlreadyexists = 12000,
    AdminNotFound = 12010,
    AdminInvalidPassword = 12020,
    NotEnoughPermission = 13030,

    InternetTypeAlreadyExists = 14000,
    InternetTypeNotFound = 14010,

    MinuteTypeAlreadyExists = 15000,
    MinuteTypeNotFound = 15010,

    SmsTypeAlreadyExists = 16000,
    SmsTypeNotFound = 16010,

    InternetAlreadyExists = 17000,
    InternetNotFound = 17010,

    MinutesAlreadyExists = 18000,
    MinutesNotFound = 18010,

    SmsAlreadyExists = 19000,
    SmsNotFound = 19010,

    UssdAlreadyExists = 20000,
    UssdNotFound = 20010,

    UserAlreadyExists = 21000,
    UserNotFound = 21010,
    UserInvalidPassword = 21020,

    OtpAlreadyExists = 22000,
    OtpNotFound = 22010,
    InvalidOtp = 22020,

    TarifAlreadyExists = 23000,
    TarifNotFound = 23010,

    NewsAlreadyExists = 24000,
    NewsNotFound = 24010,
    InvalidImage=24020
}