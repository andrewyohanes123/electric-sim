import { FC, ReactElement, useMemo, useCallback } from "react"
import { useHistory, useParams } from "react-router-dom"
import { Navbar } from "../../components/Navigation";
import { pageModules } from "../../data/moduleName";

const ModuleSelector: FC = (): ReactElement => {
  const { index } = useParams<{ index: string }>();
  const moduleIndex = useMemo(() => {
    const idx: number = parseInt(index);
    return idx - 1 < 0 ? 0 : idx - 1;
  }, [index]);
  const modulePage = useMemo(() => pageModules[moduleIndex], [moduleIndex]);
  const { push } = useHistory();

  const backToMainPage = useCallback(() => {
    push('/');
  }, [push])

  return (
    <div>
      <Navbar onBack={backToMainPage} title={modulePage.name} />
      {modulePage.component}
    </div>
  )
}

export default ModuleSelector
