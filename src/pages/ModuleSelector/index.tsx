import { FC, ReactElement, useMemo } from "react"
import { useParams } from "react-router-dom"
import { pageModules } from "../../data/moduleName";

const ModuleSelector: FC = (): ReactElement => {
  const { index } = useParams<{ index: string }>();
  const moduleIndex = useMemo(() => {
    const idx: number = parseInt(index);
    return idx - 1 < 0 ? 0 : idx - 1;
  }, [index]);
  const modulePage = useMemo(() => pageModules[moduleIndex], [moduleIndex]);

  return (
    <div>
      {modulePage.component}
    </div>
  )
}

export default ModuleSelector
