import { useEffect } from 'react';


interface LogComponentProps {
 componentName: string;
 messagePrefix?: string; 
}


const useLogComponent = ({ componentName, messagePrefix = 'Hello from' }: LogComponentProps) => {
 useEffect(() => {
    console.log(`${messagePrefix} ${componentName}`);
 }, []);
};

export default useLogComponent;
