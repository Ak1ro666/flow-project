import { useNavigate } from 'react-router-dom';
import { routes } from '@/kernel/router';
import { Root } from './ui/root';

export function Page() {
    const navigate = useNavigate();

    return <Root title="Error" goBack={() => navigate(routes.home)} />;
}
