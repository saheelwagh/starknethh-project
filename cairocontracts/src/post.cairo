#[starknet::interface]
trait IPost<TContractState> {
    fn get_post(self: @TContractState) -> felt252;
}

#[starknet::contract]
mod Post {
    use starknet::get_caller_address;
    use starknet::contract_address_const;
    use starknet::ContractAddressZeroable;
    #[storage]
    struct Storage {
        // balance: felt252, 
        content : felt252,
        owner : ContractAddress
    }

    #[external(v0)]
    impl Post of super::IPost<ContractState> {
        

        fn get_post(self: @ContractState) -> felt252 {
            self.content.read()
        }
    }
}
