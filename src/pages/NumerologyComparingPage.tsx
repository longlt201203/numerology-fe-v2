import Button from "@components/Button";
import DatePicker, { DateValue } from "@components/DatePicker";
import Input from "@components/Input";
import InputGroup from "@components/InputGroup";
import Typography from "@components/Typography";
import useLanguage from "@hooks/useLanguage";
import useSocket from "@hooks/useSocket";
import { NumerologyTransKeys } from "@language/numerology-trans-props";
import MainLayout from "@layouts/MainLayout";
import CalculateNumerologyDto from "@services/dto/calculate-numerology.dto";
import CompareRequestDto from "@services/dto/compare-request.dto";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LineWave } from "react-loader-spinner";

export default function NumerologyComparingPage() {
    const { currentLanguage } = useLanguage();
    const { t } = useTranslation();
    const { currentText, isStreaming, numerologyCompare } = useSocket();

    const emptyPerson = {
        firstName: "",
        lsName: "",
        dob: new Date().toISOString()
    }

    const [compareRequestDto, setCompareRequestDto] = useState<CompareRequestDto>({
        list: [emptyPerson, emptyPerson],
        lang: currentLanguage
    });

    const handleSubmit = () => {
        numerologyCompare({ ...compareRequestDto, lang: currentLanguage });
    }

    const handleAddPerson = () => {
        setCompareRequestDto((prev) => {
            prev.list.push(emptyPerson);
            return {...prev};
        });
    }

    const handleRemovePerson = (index: number) => {
        setCompareRequestDto((prev) => {
            prev.list.splice(index, 1);
            return {...prev};
        });
    }

    const changeItem = (index: number, item: CalculateNumerologyDto) => {
        setCompareRequestDto((prev) => {
            prev.list[index] = item;
            return {...prev};
        });
    }

    return (
        <MainLayout>
            <div className="my-10 flex flex-col gap-y-4 mx-auto border rounded-lg p-3">
                <Typography variant="h3" className="text-center">{t(NumerologyTransKeys.numerologyComparingTitle)}</Typography>
                <div className="flex flex-col gap-y-8">
                    {compareRequestDto.list.map((item, index) => (
                        <div key={index} className="flex flex-col gap-y-4">
                            <Typography variant="h5" className="text-center">#{index+1}</Typography>
                            <form autoComplete="off">
                                <InputGroup>
                                    <Input type="text" label={t(NumerologyTransKeys.firstName)} value={item.firstName} onChange={(e) => changeItem(index, { ...item, firstName: e.target.value })} />
                                    <Input type="text" label={t(NumerologyTransKeys.lsName)} value={item.lsName} onChange={(e) => changeItem(index, { ...item, lsName: e.target.value })} />
                                </InputGroup>
                            </form>
                            <DatePicker label={t(NumerologyTransKeys.birthday)} value={new Date(item.dob)} onChange={(v) => changeItem(index, { ...item, dob: (v && v instanceof Date) ? v.toISOString() : new Date().toISOString() })} />
                            {index > 1 && <Button onClick={() => handleRemovePerson(index)}>{t(NumerologyTransKeys.remove)}</Button>}
                        </div>
                    ))}
                </div>
                <hr />
                <Button onClick={handleAddPerson}>{t(NumerologyTransKeys.addPerson)}</Button>
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