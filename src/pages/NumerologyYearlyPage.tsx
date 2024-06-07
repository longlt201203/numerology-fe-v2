import Button from "@components/Button";
import DatePicker from "@components/DatePicker";
import Input from "@components/Input";
import InputGroup from "@components/InputGroup";
import Typography from "@components/Typography";
import useLanguage from "@hooks/useLanguage";
import useSocket from "@hooks/useSocket";
import { NumerologyTransKeys } from "@language/numerology-trans-props";
import MainLayout from "@layouts/MainLayout";
import CalculateYearRequestDto from "@services/dto/calculate-year-request.dto";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LineWave } from "react-loader-spinner";

export default function NumerologyYearlyPage() {
    const { t } = useTranslation();
    const { isStreaming, currentText, numerologyCalculateYear } = useSocket();
    const { currentLanguage } = useLanguage();
    const [calculateYearRequestDto, setCalculateYearRequestDto] = useState<CalculateYearRequestDto>({
        dob: new Date().toISOString(),
        lang: currentLanguage,
        year: new Date().getFullYear()
    });

    const handleSubmit = () => {
        numerologyCalculateYear({ ...calculateYearRequestDto, lang: currentLanguage });
    }

    return (
        <MainLayout>
            <div className="my-10 flex flex-col gap-y-3 mx-auto border rounded-lg p-3">
                <Typography variant="h3" className="text-center">{t(NumerologyTransKeys.numerologyCalculateYear)}</Typography>
                <form autoComplete="off" className="flex flex-col gap-y-3">
                    <Input type="text" label={t(NumerologyTransKeys.year)} value={calculateYearRequestDto.year.toString()} onChange={(e) => setCalculateYearRequestDto({ ...calculateYearRequestDto, year: parseInt(e.target.value) })} />
                </form>
                <DatePicker label={t(NumerologyTransKeys.birthday)} value={new Date(calculateYearRequestDto.dob)} onChange={(v) => v && v instanceof Date && setCalculateYearRequestDto({ ...calculateYearRequestDto, dob: v.toISOString() })} />
                <Button onClick={handleSubmit}>{t(NumerologyTransKeys.submit)}</Button>
            </div>
            <div className="mx-auto">
                <Typography variant="h2" className="text-center">{t(NumerologyTransKeys.result)}</Typography>
                <div className="mt-10">
                    <LineWave visible={isStreaming} color="#1E3A8A" width="100%" />
                    {currentText && <MDEditor.Markdown source={currentText} style={{ whiteSpace: 'pre-wrap' }} className="p-3 bg-white font-roboto" />}
                </div>
            </div>
        </MainLayout>
    );
}