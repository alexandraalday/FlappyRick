// core concepts of FSM from https://bl.ocks.org/pkronstrom/095cd4ab1c3a4a51c84982fd2bc650ee

function FiniteStateMachine(initalStateName) {
  this.current = initalStateName;
  this.states = {}
  
  this.next = function() {
    console.log(this.current + " => " + this.states[this.current].next);
    this.current = this.states[this.current].next;
    this.states[this.current].init();
  }
  
  this.addState = function(state) {
    this.states[state.name] = state;
  }
  
  this.run = function() {
    this.states[this.current].run();
  }
}

function State(stateName, nextStateName, runFunction, initFunction) {
  this.name = stateName;
  this.run = runFunction || function() {};
  this.init = initFunction || function() {};
  this.next = nextStateName;
}