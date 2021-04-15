import { getTheme } from './colors';

type Variables = {
    [key: string]: string;
}

interface ITheme {
    scheme: {
        variables: Variables[];
        rules: string[];
    };
}

[
    {
        scheme: getTheme('dark'),
    },
].map((theme: ITheme) => {
    console.log(theme.scheme);
});
