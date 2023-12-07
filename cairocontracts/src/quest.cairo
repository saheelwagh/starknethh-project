#[starknet::interface]
trait IQuest<TContractState> {
    // fn increase_balance(ref self: TContractState, amount: felt252);
    // fn get_balance(self: @TContractState) -> felt252;

}

#[starknet::contract]
mod Quest {
    #[storage]
    struct Storage {
        posts : LegacyMap::<Post> 
    }

    #[external(v0)]
    impl Quest of super::IQuest<ContractState> {
        #[constructor]
        fn constructor(ref self: ContractState) {
            
        }
    }
}
