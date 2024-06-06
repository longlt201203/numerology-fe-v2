import CalculateNumerologyDto from "@services/dto/calculate-numerology.dto";

export default class CompareRequestDto {
    list: CalculateNumerologyDto[];
    lang: string;
}