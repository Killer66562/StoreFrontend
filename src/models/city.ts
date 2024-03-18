import { Base } from "./base";
import { District } from "./district";

export interface City extends Base{
    name: string,
    districts: District[]
}