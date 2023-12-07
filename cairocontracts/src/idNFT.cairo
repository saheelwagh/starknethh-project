#[starknet::interface]
trait IidNFT<TContractState> {
    // fn increase_balance(ref self: TContractState, amount: felt252);
    // fn get_balance(self: @TContractState) -> felt252;
    fn mint(to: ContractAddress);
}

#[starknet::contract]
mod idNFT {
    #[storage]
    struct Storage {
    }

    #[external(v0)]
    impl idNFT of super::IHelloStarknet<ContractState> {
        fn mint(to: ContractAddress){
            
        }
    }
}
