package cl.onesnap.springtest.statemachine;

import org.springframework.beans.factory.support.StaticListableBeanFactory;
import org.springframework.core.task.SyncTaskExecutor;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.scheduling.concurrent.ConcurrentTaskScheduler;
import org.springframework.statemachine.StateContext;
import org.springframework.statemachine.StateMachine;
import org.springframework.statemachine.StateMachineSystemConstants;
import org.springframework.statemachine.access.StateMachineAccess;
import org.springframework.statemachine.config.StateMachineBuilder;
import org.springframework.statemachine.state.State;
import org.springframework.statemachine.support.DefaultStateMachineContext;
import org.springframework.statemachine.support.StateMachineInterceptor;
import org.springframework.statemachine.transition.Transition;

import java.util.List;

public class BaseStateMachine {
    public static boolean doTransition(String transition, StateMachineProperty stateProperty) throws Exception {
        StateMachine<String, String> stateMachine = initStateMachine(stateProperty);
        Message<String> message = MessageBuilder.withPayload(transition).setHeader("stateProperty", stateProperty).build();
        return stateMachine.sendEvent(message);
    }

    private static StateMachine<String, String> initStateMachine(StateMachineProperty stateProperty) throws Exception {
        StateMachine<String, String> stateMachine = getStateMachine();
        resetCurrentState(stateMachine, stateProperty.get());
        setInterceptor(stateMachine);
        stateMachine.start();
        return stateMachine;
    }

    private static void resetCurrentState(StateMachine<String, String> stateMachine, String state) {
        List<StateMachineAccess<String, String>> withAllRegions = stateMachine.getStateMachineAccessor().withAllRegions();
        for (StateMachineAccess<String, String> a : withAllRegions) {
            a.resetStateMachine(new DefaultStateMachineContext<String, String>(state, null, null, null));
        }
    }

    private static class MyStateMachineInterceptor implements StateMachineInterceptor<String, String> {
        @Override
        public StateContext<String, String> preTransition(StateContext<String, String> stateContext) {
            return stateContext;
        }

        @Override
        public void preStateChange(State<String, String> state, Message<String> message,
                                   Transition<String, String> transition, StateMachine<String, String> stateMachine) {
            if (message != null && message.getHeaders().containsKey("stateProperty")) {
                StateMachineProperty stateProperty = message.getHeaders().get("stateProperty", StateMachineProperty.class);
                stateProperty.set(state.getId());
            }
        }

        @Override
        public StateContext<String, String> postTransition(StateContext<String, String> stateContext) {
            return stateContext;
        }

        @Override
        public void postStateChange(State<String, String> state, Message<String> message,
                                    Transition<String, String> transition, StateMachine<String, String> stateMachine) {
        }

        @Override
        public Exception stateMachineError(StateMachine<String, String> stateMachine,
                                           Exception exception) {
            // return null indicating handled error
            return exception;
        }
    }

    private static void setInterceptor(StateMachine<String, String> stateMachine) {
        stateMachine.getStateMachineAccessor().withRegion().addStateMachineInterceptor(new MyStateMachineInterceptor());
    }

    private static StateMachine<String, String> getStateMachine() throws Exception {
        StateMachineBuilder.Builder<String, String> builder = StateMachineBuilder.builder();

        StaticListableBeanFactory beanFactory = new StaticListableBeanFactory();
        beanFactory.addBean(StateMachineSystemConstants.TASK_EXECUTOR_BEAN_NAME, new SyncTaskExecutor());
        beanFactory.addBean("taskScheduler", new ConcurrentTaskScheduler());

        builder.configureConfiguration()
            .withConfiguration()
            .beanFactory(beanFactory);

        setStates(builder);
        setTransitions(builder);

        StateMachine<String, String> stateMachine = builder.build();
        return stateMachine;

    }

    private static void setTransitions(StateMachineBuilder.Builder<String, String> builder) throws Exception {
        builder.configureTransitions()
            .withExternal()
            .source("PLACED").target("PROCESSING")
            .event("PROCESS")
            .and()
            .withExternal()
            .source("PROCESSING").target("SENT")
            .event("SEND")
            .and()
            .withExternal()
            .source("SENT").target("DELIVERED")
            .event("DELIVER");
    }

    private static void setStates(StateMachineBuilder.Builder<String, String> builder) throws Exception {
        builder.configureStates()
            .withStates()
            .initial("PLACED")
            .state("PROCESSING")
            .state("SENT")
            .state("DELIVERED");
    }
}
