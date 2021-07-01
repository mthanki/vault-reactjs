import CodeSnippetItem from "./CodeSnippetItem";
import "./CodeSnippetList.css";

const CodeSnippetList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>No Snippets Found</h2>
            </div>
        )
    }

    return (
        <ul>
            {props.items.map(snippet => (
                <CodeSnippetItem
                    key={snippet.id}
                    name={snippet.name}
                />
            ))}
        </ul>
    )
}

export default CodeSnippetList;