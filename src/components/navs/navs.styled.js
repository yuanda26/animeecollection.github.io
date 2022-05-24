import styled from "@emotion/styled";

export const NavWrapper = styled.span`
    display: inline-block;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.01em;
    padding: 25px 0 25px;
    margin: 0;
`;

export const NavTitle = styled.div`
    background: #dde6ee;
    color: #5c728a;
    line-height: 1;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    padding: 3px 12px;
    padding: 10px 15px;
    font-size: 32px;
    font-weight: 700;
    margin: 0;
    margin-left: 5px;
    position: relative;
    width: auto;
`;

export const NavGroup = styled.nav`
    top: 0;
    left: 0;
    z-index: 90;
    width: 160px;
    display: none;
    min-height: 60px;
    position: absolute;
    border-radius: 4px;
    background-color: #fff;

    &.show {
        top: 62px;
        display: block;
        transition: all 500ms ease-in-out;
    }
    &.hide {
        top: 0;
        display: none;
        transition: all 500ms ease-in-out;
    }
`;

export const NavList = styled.ul`
    padding: 15px;
`;

export const NavItems = styled.li`
    color: #dde6ee;
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
    padding: 9px 0;
`;
