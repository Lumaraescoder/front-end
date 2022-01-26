import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer, LinearProgress, Grid, Badge } from "@material-ui/core";
import { StyledButton } from "../../styles/styles";
import Item from "components/Item/Item";
import Cart from "components/Cart/Cart";
import { CartItemType } from "types/types";
import { SAddShoppingCartSharp } from "./ProductStyled";
import Container from "@mui/material/Container";

const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const ProductList = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "id",
    getProducts
  );

  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      //1. is item already added in the cart?
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1} : item
        )
      }
      //First time item is added
      return [ ...prev, {...clickedItem, amount: 1}]
    })
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if(item.amount === 1) return ack;
          return [...ack, {...item, amount: item.amount - 1}];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    ))
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>;
  return (
    <>
    <Container>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <SAddShoppingCartSharp />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => {
          return (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
    </>
  );
};

export default ProductList;
