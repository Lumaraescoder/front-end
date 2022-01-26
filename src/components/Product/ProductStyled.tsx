import styled from 'styled-components'
import IconButton from '@mui/material/IconButton';
import { AddShoppingCartSharp } from "@material-ui/icons"

export const StyledButton  = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`;

export const SAddShoppingCartSharp  = styled(AddShoppingCartSharp)`
    position:fixed;
    color: red;
    font-size: 30px;
`;

