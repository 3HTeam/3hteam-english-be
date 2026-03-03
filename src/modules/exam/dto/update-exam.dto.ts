import { PartialType } from "@nestjs/swagger";
import { CreateExamDto, CreateExamSectionDto } from "./create-exam.dto";

export class UpdateExamDto extends PartialType(CreateExamDto) {}

export class UpdateExamSectionDto extends PartialType(CreateExamSectionDto) {}
