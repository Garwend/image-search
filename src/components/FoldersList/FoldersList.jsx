
import { useSelector } from "react-redux";
import Folder from "./subcomponents/Folder/Folder";

const FoldersList = () => {
    const folders = useSelector((state) => state.folders)

    return (
        <>
            {folders.map(folder => <Folder key={folder.name} name={folder.name} />)}
        </>
    )
}

export default FoldersList;