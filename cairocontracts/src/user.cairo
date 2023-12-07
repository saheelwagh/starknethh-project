#[starknet::interface]
trait IUser<TContractState> {
    fn get_name(self: @TContractState) -> felt252;
    fn create_user(self: @TContractState, name:felt252);
    fn get_posts(self: @TContractState) -> felt252; //this shd return posts graph
    fn create_post(content: felt252, self:@TContractState);
}
trait IPost{
}
#[starknet::contract]
mod User {
    #[storage]
    struct Storage {
        name : felt252,
       // posts : 
    }
    
    #[external(v0)]
    impl User of super::IUser<ContractState> {
        

        fn get_name(self: @ContractState) -> felt252 {
            self.name.read()
        }

        fn create_post(content: felt252, self:@TContractState){
            //import the Post interface
            // Add a new post to Array of posts assosciated with this user
        }
        fn create_user(self: @TContractState, name: felt252){
            // shd this be a constructor ?
            self.name.write(name);
        }
    }
}
