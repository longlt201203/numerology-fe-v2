import Button from "@components/Button";
import DatePicker, { DateValue } from "@components/DatePicker";
import Input from "@components/Input";
import InputGroup from "@components/InputGroup";
import Typography from "@components/Typography";
import useLanguage from "@hooks/useLanguage";
import useSocket from "@hooks/useSocket";
import { NumerologyTransKeys } from "@language/numerology-trans-props";
import MainLayout from "@layouts/MainLayout";
import AnalyzeRequestDto from "@services/dto/analyze-request.dto";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LineWave } from "react-loader-spinner";


export default function NumerologyReadingPage() {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslation();
    const { currentText, isStreaming, numerologyAnalyze } = useSocket();

    const [analyzeRequestDto, setAnalyzeRequestDto] = useState<AnalyzeRequestDto>({
        firstName: "",
        lsName: "",
        dob: "",
        lang: currentLanguage
    });
    const [currentDateValue, setCurrentDateValue] = useState<Date>(new Date());

    const handleSubmit = () => {
        numerologyAnalyze({ ...analyzeRequestDto, dob: currentDateValue.toISOString(), lang: currentLanguage });
    }

    return (
        <MainLayout>
            <div className="my-10 flex flex-col gap-y-3 mx-auto border rounded-lg p-3">
                <Typography variant="h3" className="text-center">{t(NumerologyTransKeys.numerologyReadingTitle)}</Typography>
                <form autoComplete="off" className="flex flex-col gap-y-3">
                    <InputGroup>
                        <Input type="text" label={t(NumerologyTransKeys.firstName)} value={analyzeRequestDto.firstName} onChange={(e) => setAnalyzeRequestDto({ ...analyzeRequestDto, firstName: e.target.value })} />
                        <Input type="text" label={t(NumerologyTransKeys.lsName)} value={analyzeRequestDto.lsName} onChange={(e) => setAnalyzeRequestDto({ ...analyzeRequestDto, lsName: e.target.value })} />
                    </InputGroup>
                </form>
                <DatePicker label={t(NumerologyTransKeys.birthday)} value={currentDateValue} onChange={(v) => v && v instanceof Date && setCurrentDateValue(v)} />
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
    )
}