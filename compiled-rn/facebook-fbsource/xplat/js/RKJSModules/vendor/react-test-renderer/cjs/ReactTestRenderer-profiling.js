/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 * @nolint
 * @preventMunge
 * @generated
 */

"use strict";
var React = require("react"),
  Scheduler = require("scheduler/unstable_mock"),
  Scheduler$1 = require("scheduler");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1;
    descriptor.configurable = !0;
    "value" in descriptor && (descriptor.writable = !0);
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  protoProps && _defineProperties(Constructor.prototype, protoProps);
  staticProps && _defineProperties(Constructor, staticProps);
  return Constructor;
}
var assign = Object.assign,
  ReactSharedInternals =
    React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  REACT_ELEMENT_TYPE = Symbol.for("react.element"),
  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
  REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
  REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context"),
  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
  REACT_MEMO_TYPE = Symbol.for("react.memo"),
  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
  REACT_SCOPE_TYPE = Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"),
  REACT_LEGACY_HIDDEN_TYPE = Symbol.for("react.legacy_hidden"),
  REACT_CACHE_TYPE = Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for(
    "react.default_value"
  ),
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
function getIteratorFn(maybeIterable) {
  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
  maybeIterable =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable["@@iterator"];
  return "function" === typeof maybeIterable ? maybeIterable : null;
}
function getComponentNameFromType(type) {
  if (null == type) return null;
  if ("function" === typeof type) return type.displayName || type.name || null;
  if ("string" === typeof type) return type;
  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return "Fragment";
    case REACT_PORTAL_TYPE:
      return "Portal";
    case REACT_PROFILER_TYPE:
      return "Profiler";
    case REACT_STRICT_MODE_TYPE:
      return "StrictMode";
    case REACT_SUSPENSE_TYPE:
      return "Suspense";
    case REACT_SUSPENSE_LIST_TYPE:
      return "SuspenseList";
    case REACT_CACHE_TYPE:
      return "Cache";
  }
  if ("object" === typeof type)
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return (type.displayName || "Context") + ".Consumer";
      case REACT_PROVIDER_TYPE:
        return (type._context.displayName || "Context") + ".Provider";
      case REACT_FORWARD_REF_TYPE:
        var innerType = type.render;
        type = type.displayName;
        type ||
          ((type = innerType.displayName || innerType.name || ""),
          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
        return type;
      case REACT_MEMO_TYPE:
        return (
          (innerType = type.displayName || null),
          null !== innerType
            ? innerType
            : getComponentNameFromType(type.type) || "Memo"
        );
      case REACT_LAZY_TYPE:
        innerType = type._payload;
        type = type._init;
        try {
          return getComponentNameFromType(type(innerType));
        } catch (x) {
          break;
        }
      case REACT_SERVER_CONTEXT_TYPE:
        return (type.displayName || type._globalName) + ".Provider";
    }
  return null;
}
function getComponentNameFromFiber(fiber) {
  var type = fiber.type;
  switch (fiber.tag) {
    case 24:
      return "Cache";
    case 9:
      return (type.displayName || "Context") + ".Consumer";
    case 10:
      return (type._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (fiber = type.render),
        (fiber = fiber.displayName || fiber.name || ""),
        type.displayName ||
          ("" !== fiber ? "ForwardRef(" + fiber + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 26:
    case 27:
    case 5:
      return type;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return getComponentNameFromType(type);
    case 8:
      return type === REACT_STRICT_MODE_TYPE ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof type)
        return type.displayName || type.name || null;
      if ("string" === typeof type) return type;
  }
  return null;
}
function getNearestMountedFiber(fiber) {
  var node = fiber,
    nearestMounted = fiber;
  if (fiber.alternate) for (; node.return; ) node = node.return;
  else {
    fiber = node;
    do
      (node = fiber),
        0 !== (node.flags & 4098) && (nearestMounted = node.return),
        (fiber = node.return);
    while (fiber);
  }
  return 3 === node.tag ? nearestMounted : null;
}
function assertIsMounted(fiber) {
  if (getNearestMountedFiber(fiber) !== fiber)
    throw Error("Unable to find node on an unmounted component.");
}
function findCurrentFiberUsingSlowPath(fiber) {
  var alternate = fiber.alternate;
  if (!alternate) {
    alternate = getNearestMountedFiber(fiber);
    if (null === alternate)
      throw Error("Unable to find node on an unmounted component.");
    return alternate !== fiber ? null : fiber;
  }
  for (var a = fiber, b = alternate; ; ) {
    var parentA = a.return;
    if (null === parentA) break;
    var parentB = parentA.alternate;
    if (null === parentB) {
      b = parentA.return;
      if (null !== b) {
        a = b;
        continue;
      }
      break;
    }
    if (parentA.child === parentB.child) {
      for (parentB = parentA.child; parentB; ) {
        if (parentB === a) return assertIsMounted(parentA), fiber;
        if (parentB === b) return assertIsMounted(parentA), alternate;
        parentB = parentB.sibling;
      }
      throw Error("Unable to find node on an unmounted component.");
    }
    if (a.return !== b.return) (a = parentA), (b = parentB);
    else {
      for (var didFindChild = !1, child$0 = parentA.child; child$0; ) {
        if (child$0 === a) {
          didFindChild = !0;
          a = parentA;
          b = parentB;
          break;
        }
        if (child$0 === b) {
          didFindChild = !0;
          b = parentA;
          a = parentB;
          break;
        }
        child$0 = child$0.sibling;
      }
      if (!didFindChild) {
        for (child$0 = parentB.child; child$0; ) {
          if (child$0 === a) {
            didFindChild = !0;
            a = parentB;
            b = parentA;
            break;
          }
          if (child$0 === b) {
            didFindChild = !0;
            b = parentB;
            a = parentA;
            break;
          }
          child$0 = child$0.sibling;
        }
        if (!didFindChild)
          throw Error(
            "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
          );
      }
    }
    if (a.alternate !== b)
      throw Error(
        "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
      );
  }
  if (3 !== a.tag)
    throw Error("Unable to find node on an unmounted component.");
  return a.stateNode.current === a ? fiber : alternate;
}
function findCurrentHostFiberImpl(node) {
  var tag = node.tag;
  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
  for (node = node.child; null !== node; ) {
    tag = findCurrentHostFiberImpl(node);
    if (null !== tag) return tag;
    node = node.sibling;
  }
  return null;
}
var isArrayImpl = Array.isArray,
  scheduleCallback$2 = Scheduler$1.unstable_scheduleCallback,
  cancelCallback$1 = Scheduler$1.unstable_cancelCallback,
  shouldYield = Scheduler$1.unstable_shouldYield,
  requestPaint = Scheduler$1.unstable_requestPaint,
  now$1 = Scheduler$1.unstable_now,
  ImmediatePriority = Scheduler$1.unstable_ImmediatePriority,
  UserBlockingPriority = Scheduler$1.unstable_UserBlockingPriority,
  NormalPriority$1 = Scheduler$1.unstable_NormalPriority,
  IdlePriority = Scheduler$1.unstable_IdlePriority,
  rendererID = null,
  injectedHook = null,
  isDevToolsPresent = "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;
function onCommitRoot(root, eventPriority) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
    try {
      var didError = 128 === (root.current.flags & 128);
      switch (eventPriority) {
        case 2:
          var schedulerPriority = ImmediatePriority;
          break;
        case 8:
          schedulerPriority = UserBlockingPriority;
          break;
        case 32:
          schedulerPriority = NormalPriority$1;
          break;
        case 536870912:
          schedulerPriority = IdlePriority;
          break;
        default:
          schedulerPriority = NormalPriority$1;
      }
      injectedHook.onCommitFiberRoot(
        rendererID,
        root,
        schedulerPriority,
        didError
      );
    } catch (err) {}
}
var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
  log = Math.log,
  LN2 = Math.LN2;
function clz32Fallback(x) {
  x >>>= 0;
  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
}
var nextTransitionLane = 128,
  nextRetryLane = 8388608;
function getHighestPriorityLanes(lanes) {
  switch (lanes & -lanes) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
      return lanes & 8388480;
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return lanes & 125829120;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return lanes;
  }
}
function getNextLanes(root, wipLanes) {
  var pendingLanes = root.pendingLanes;
  if (0 === pendingLanes) return 0;
  var nextLanes = 0,
    suspendedLanes = root.suspendedLanes,
    pingedLanes = root.pingedLanes,
    nonIdlePendingLanes = pendingLanes & 268435455;
  if (0 !== nonIdlePendingLanes) {
    var nonIdleUnblockedLanes = nonIdlePendingLanes & ~suspendedLanes;
    0 !== nonIdleUnblockedLanes
      ? (nextLanes = getHighestPriorityLanes(nonIdleUnblockedLanes))
      : ((pingedLanes &= nonIdlePendingLanes),
        0 !== pingedLanes &&
          (nextLanes = getHighestPriorityLanes(pingedLanes)));
  } else
    (nonIdlePendingLanes = pendingLanes & ~suspendedLanes),
      0 !== nonIdlePendingLanes
        ? (nextLanes = getHighestPriorityLanes(nonIdlePendingLanes))
        : 0 !== pingedLanes &&
          (nextLanes = getHighestPriorityLanes(pingedLanes));
  if (0 === nextLanes) return 0;
  if (
    0 !== wipLanes &&
    wipLanes !== nextLanes &&
    0 === (wipLanes & suspendedLanes) &&
    ((suspendedLanes = nextLanes & -nextLanes),
    (pingedLanes = wipLanes & -wipLanes),
    suspendedLanes >= pingedLanes ||
      (32 === suspendedLanes && 0 !== (pingedLanes & 8388480)))
  )
    return wipLanes;
  0 === (root.current.mode & 32) &&
    0 !== (nextLanes & 8) &&
    (nextLanes |= pendingLanes & 32);
  wipLanes = root.entangledLanes;
  if (0 !== wipLanes)
    for (root = root.entanglements, wipLanes &= nextLanes; 0 < wipLanes; )
      (pendingLanes = 31 - clz32(wipLanes)),
        (suspendedLanes = 1 << pendingLanes),
        (nextLanes |= root[pendingLanes]),
        (wipLanes &= ~suspendedLanes);
  return nextLanes;
}
function computeExpirationTime(lane, currentTime) {
  switch (lane) {
    case 1:
    case 2:
    case 4:
    case 8:
      return currentTime + 250;
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
      return currentTime + 5e3;
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function getLanesToRetrySynchronouslyOnError(root, originallyAttemptedLanes) {
  if (root.errorRecoveryDisabledLanes & originallyAttemptedLanes) return 0;
  root = root.pendingLanes & -1073741825;
  return 0 !== root ? root : root & 1073741824 ? 1073741824 : 0;
}
function includesBlockingLane(root, lanes) {
  return 0 !== (root.current.mode & 32) ? !1 : 0 !== (lanes & 60);
}
function claimNextTransitionLane() {
  var lane = nextTransitionLane;
  nextTransitionLane <<= 1;
  0 === (nextTransitionLane & 8388480) && (nextTransitionLane = 128);
  return lane;
}
function createLaneMap(initial) {
  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
  return laneMap;
}
function markRootUpdated(root, updateLane, eventTime) {
  root.pendingLanes |= updateLane;
  536870912 !== updateLane &&
    ((root.suspendedLanes = 0), (root.pingedLanes = 0));
  root = root.eventTimes;
  updateLane = 31 - clz32(updateLane);
  root[updateLane] = eventTime;
}
function markRootFinished(root, remainingLanes) {
  var noLongerPendingLanes = root.pendingLanes & ~remainingLanes;
  root.pendingLanes = remainingLanes;
  root.suspendedLanes = 0;
  root.pingedLanes = 0;
  root.expiredLanes &= remainingLanes;
  root.mutableReadLanes &= remainingLanes;
  root.entangledLanes &= remainingLanes;
  root.errorRecoveryDisabledLanes &= remainingLanes;
  remainingLanes = root.entanglements;
  var eventTimes = root.eventTimes,
    expirationTimes = root.expirationTimes;
  for (root = root.hiddenUpdates; 0 < noLongerPendingLanes; ) {
    var index$5 = 31 - clz32(noLongerPendingLanes),
      lane = 1 << index$5;
    remainingLanes[index$5] = 0;
    eventTimes[index$5] = -1;
    expirationTimes[index$5] = -1;
    var hiddenUpdatesForLane = root[index$5];
    if (null !== hiddenUpdatesForLane)
      for (
        root[index$5] = null, index$5 = 0;
        index$5 < hiddenUpdatesForLane.length;
        index$5++
      ) {
        var update = hiddenUpdatesForLane[index$5];
        null !== update && (update.lane &= -1073741825);
      }
    noLongerPendingLanes &= ~lane;
  }
}
function markRootEntangled(root, entangledLanes) {
  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
  for (root = root.entanglements; rootEntangledLanes; ) {
    var index$6 = 31 - clz32(rootEntangledLanes),
      lane = 1 << index$6;
    (lane & entangledLanes) | (root[index$6] & entangledLanes) &&
      (root[index$6] |= entangledLanes);
    rootEntangledLanes &= ~lane;
  }
}
var currentUpdatePriority = 0;
function lanesToEventPriority(lanes) {
  lanes &= -lanes;
  return 2 < lanes
    ? 8 < lanes
      ? 0 !== (lanes & 268435455)
        ? 32
        : 536870912
      : 8
    : 2;
}
function shim() {
  throw Error(
    "The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue."
  );
}
var NO_CONTEXT = {},
  UPDATE_SIGNAL = {},
  nodeToInstanceMap = new WeakMap();
function getPublicInstance(inst) {
  switch (inst.tag) {
    case "INSTANCE":
      var createNodeMock = inst.rootContainerInstance.createNodeMock;
      createNodeMock = createNodeMock({ type: inst.type, props: inst.props });
      "object" === typeof createNodeMock &&
        null !== createNodeMock &&
        nodeToInstanceMap.set(createNodeMock, inst);
      return createNodeMock;
    default:
      return inst;
  }
}
function appendChild(parentInstance, child) {
  var index = parentInstance.children.indexOf(child);
  -1 !== index && parentInstance.children.splice(index, 1);
  parentInstance.children.push(child);
}
function insertBefore(parentInstance, child, beforeChild) {
  var index = parentInstance.children.indexOf(child);
  -1 !== index && parentInstance.children.splice(index, 1);
  beforeChild = parentInstance.children.indexOf(beforeChild);
  parentInstance.children.splice(beforeChild, 0, child);
}
var scheduleTimeout = setTimeout,
  cancelTimeout = clearTimeout;
function describeComponentFrame(name, source, ownerName) {
  source = "";
  ownerName && (source = " (created by " + ownerName + ")");
  return "\n    in " + (name || "Unknown") + source;
}
function describeFunctionComponentFrame(fn, source) {
  return fn
    ? describeComponentFrame(fn.displayName || fn.name || null, source, null)
    : "";
}
var hasOwnProperty = Object.prototype.hasOwnProperty,
  valueStack = [],
  index = -1;
function createCursor(defaultValue) {
  return { current: defaultValue };
}
function pop(cursor) {
  0 > index ||
    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
}
function push(cursor, value) {
  index++;
  valueStack[index] = cursor.current;
  cursor.current = value;
}
var emptyContextObject = {},
  contextStackCursor$1 = createCursor(emptyContextObject),
  didPerformWorkStackCursor = createCursor(!1),
  previousContext = emptyContextObject;
function getMaskedContext(workInProgress, unmaskedContext) {
  var contextTypes = workInProgress.type.contextTypes;
  if (!contextTypes) return emptyContextObject;
  var instance = workInProgress.stateNode;
  if (
    instance &&
    instance.__reactInternalMemoizedUnmaskedChildContext === unmaskedContext
  )
    return instance.__reactInternalMemoizedMaskedChildContext;
  var context = {},
    key;
  for (key in contextTypes) context[key] = unmaskedContext[key];
  instance &&
    ((workInProgress = workInProgress.stateNode),
    (workInProgress.__reactInternalMemoizedUnmaskedChildContext =
      unmaskedContext),
    (workInProgress.__reactInternalMemoizedMaskedChildContext = context));
  return context;
}
function isContextProvider(type) {
  type = type.childContextTypes;
  return null !== type && void 0 !== type;
}
function popContext() {
  pop(didPerformWorkStackCursor);
  pop(contextStackCursor$1);
}
function pushTopLevelContextObject(fiber, context, didChange) {
  if (contextStackCursor$1.current !== emptyContextObject)
    throw Error(
      "Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue."
    );
  push(contextStackCursor$1, context);
  push(didPerformWorkStackCursor, didChange);
}
function processChildContext(fiber, type, parentContext) {
  var instance = fiber.stateNode;
  type = type.childContextTypes;
  if ("function" !== typeof instance.getChildContext) return parentContext;
  instance = instance.getChildContext();
  for (var contextKey in instance)
    if (!(contextKey in type))
      throw Error(
        (getComponentNameFromFiber(fiber) || "Unknown") +
          '.getChildContext(): key "' +
          contextKey +
          '" is not defined in childContextTypes.'
      );
  return assign({}, parentContext, instance);
}
function pushContextProvider(workInProgress) {
  workInProgress =
    ((workInProgress = workInProgress.stateNode) &&
      workInProgress.__reactInternalMemoizedMergedChildContext) ||
    emptyContextObject;
  previousContext = contextStackCursor$1.current;
  push(contextStackCursor$1, workInProgress);
  push(didPerformWorkStackCursor, didPerformWorkStackCursor.current);
  return !0;
}
function invalidateContextProvider(workInProgress, type, didChange) {
  var instance = workInProgress.stateNode;
  if (!instance)
    throw Error(
      "Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue."
    );
  didChange
    ? ((workInProgress = processChildContext(
        workInProgress,
        type,
        previousContext
      )),
      (instance.__reactInternalMemoizedMergedChildContext = workInProgress),
      pop(didPerformWorkStackCursor),
      pop(contextStackCursor$1),
      push(contextStackCursor$1, workInProgress))
    : pop(didPerformWorkStackCursor);
  push(didPerformWorkStackCursor, didChange);
}
function is(x, y) {
  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
}
var objectIs = "function" === typeof Object.is ? Object.is : is,
  syncQueue = null,
  includesLegacySyncCallbacks = !1,
  isFlushingSyncQueue = !1;
function flushSyncCallbacks() {
  if (!isFlushingSyncQueue && null !== syncQueue) {
    isFlushingSyncQueue = !0;
    var i = 0,
      previousUpdatePriority = currentUpdatePriority;
    try {
      var queue = syncQueue;
      for (currentUpdatePriority = 2; i < queue.length; i++) {
        var callback = queue[i];
        do callback = callback(!0);
        while (null !== callback);
      }
      syncQueue = null;
      includesLegacySyncCallbacks = !1;
    } catch (error) {
      throw (
        (null !== syncQueue && (syncQueue = syncQueue.slice(i + 1)),
        scheduleCallback$2(ImmediatePriority, flushSyncCallbacks),
        error)
      );
    } finally {
      (currentUpdatePriority = previousUpdatePriority),
        (isFlushingSyncQueue = !1);
    }
  }
  return null;
}
var contextStackCursor = createCursor(null),
  contextFiberStackCursor = createCursor(null),
  rootInstanceStackCursor = createCursor(null);
function pushHostContainer(fiber, nextRootInstance) {
  push(rootInstanceStackCursor, nextRootInstance);
  push(contextFiberStackCursor, fiber);
  push(contextStackCursor, null);
  pop(contextStackCursor);
  push(contextStackCursor, NO_CONTEXT);
}
function popHostContainer() {
  pop(contextStackCursor);
  pop(contextFiberStackCursor);
  pop(rootInstanceStackCursor);
}
function pushHostContext(fiber) {
  contextStackCursor.current !== NO_CONTEXT &&
    (push(contextFiberStackCursor, fiber),
    push(contextStackCursor, NO_CONTEXT));
}
function popHostContext(fiber) {
  contextFiberStackCursor.current === fiber &&
    (pop(contextStackCursor), pop(contextFiberStackCursor));
}
var hydrationErrors = null,
  concurrentQueues = [],
  concurrentQueuesIndex = 0,
  concurrentlyUpdatedLanes = 0;
function finishQueueingConcurrentUpdates() {
  for (
    var endIndex = concurrentQueuesIndex,
      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
    i < endIndex;

  ) {
    var fiber = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var queue = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var update = concurrentQueues[i];
    concurrentQueues[i++] = null;
    var lane = concurrentQueues[i];
    concurrentQueues[i++] = null;
    if (null !== queue && null !== update) {
      var pending = queue.pending;
      null === pending
        ? (update.next = update)
        : ((update.next = pending.next), (pending.next = update));
      queue.pending = update;
    }
    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
  }
}
function enqueueUpdate$1(fiber, queue, update, lane) {
  concurrentQueues[concurrentQueuesIndex++] = fiber;
  concurrentQueues[concurrentQueuesIndex++] = queue;
  concurrentQueues[concurrentQueuesIndex++] = update;
  concurrentQueues[concurrentQueuesIndex++] = lane;
  concurrentlyUpdatedLanes |= lane;
  fiber.lanes |= lane;
  fiber = fiber.alternate;
  null !== fiber && (fiber.lanes |= lane);
}
function enqueueConcurrentRenderForLane(fiber, lane) {
  enqueueUpdate$1(fiber, null, null, lane);
  return getRootForUpdatedFiber(fiber);
}
function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
  sourceFiber.lanes |= lane;
  var alternate = sourceFiber.alternate;
  null !== alternate && (alternate.lanes |= lane);
  for (var isHidden = !1, parent = sourceFiber.return; null !== parent; )
    (parent.childLanes |= lane),
      (alternate = parent.alternate),
      null !== alternate && (alternate.childLanes |= lane),
      22 === parent.tag &&
        ((sourceFiber = parent.stateNode),
        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)),
      (sourceFiber = parent),
      (parent = parent.return);
  isHidden &&
    null !== update &&
    3 === sourceFiber.tag &&
    ((parent = sourceFiber.stateNode),
    (isHidden = 31 - clz32(lane)),
    (parent = parent.hiddenUpdates),
    (sourceFiber = parent[isHidden]),
    null === sourceFiber
      ? (parent[isHidden] = [update])
      : sourceFiber.push(update),
    (update.lane = lane | 1073741824));
}
function getRootForUpdatedFiber(sourceFiber) {
  if (50 < nestedUpdateCount)
    throw (
      ((nestedUpdateCount = 0),
      (rootWithNestedUpdates = null),
      Error(
        "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
      ))
    );
  for (var parent = sourceFiber.return; null !== parent; )
    (sourceFiber = parent), (parent = sourceFiber.return);
  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
}
var hasForceUpdate = !1;
function initializeUpdateQueue(fiber) {
  fiber.updateQueue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null
  };
}
function cloneUpdateQueue(current, workInProgress) {
  current = current.updateQueue;
  workInProgress.updateQueue === current &&
    (workInProgress.updateQueue = {
      baseState: current.baseState,
      firstBaseUpdate: current.firstBaseUpdate,
      lastBaseUpdate: current.lastBaseUpdate,
      shared: current.shared,
      callbacks: null
    });
}
function createUpdate(eventTime, lane) {
  return {
    eventTime: eventTime,
    lane: lane,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  };
}
function enqueueUpdate(fiber, update, lane) {
  var updateQueue = fiber.updateQueue;
  if (null === updateQueue) return null;
  updateQueue = updateQueue.shared;
  if (0 !== (executionContext & 2)) {
    var pending = updateQueue.pending;
    null === pending
      ? (update.next = update)
      : ((update.next = pending.next), (pending.next = update));
    updateQueue.pending = update;
    update = getRootForUpdatedFiber(fiber);
    markUpdateLaneFromFiberToRoot(fiber, null, lane);
    return update;
  }
  enqueueUpdate$1(fiber, updateQueue, update, lane);
  return getRootForUpdatedFiber(fiber);
}
function entangleTransitions(root, fiber, lane) {
  fiber = fiber.updateQueue;
  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 8388480))) {
    var queueLanes = fiber.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    fiber.lanes = lane;
    markRootEntangled(root, lane);
  }
}
function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
  var queue = workInProgress.updateQueue,
    current = workInProgress.alternate;
  if (
    null !== current &&
    ((current = current.updateQueue), queue === current)
  ) {
    var newFirst = null,
      newLast = null;
    queue = queue.firstBaseUpdate;
    if (null !== queue) {
      do {
        var clone = {
          eventTime: queue.eventTime,
          lane: queue.lane,
          tag: queue.tag,
          payload: queue.payload,
          callback: null,
          next: null
        };
        null === newLast
          ? (newFirst = newLast = clone)
          : (newLast = newLast.next = clone);
        queue = queue.next;
      } while (null !== queue);
      null === newLast
        ? (newFirst = newLast = capturedUpdate)
        : (newLast = newLast.next = capturedUpdate);
    } else newFirst = newLast = capturedUpdate;
    queue = {
      baseState: current.baseState,
      firstBaseUpdate: newFirst,
      lastBaseUpdate: newLast,
      shared: current.shared,
      callbacks: current.callbacks
    };
    workInProgress.updateQueue = queue;
    return;
  }
  workInProgress = queue.lastBaseUpdate;
  null === workInProgress
    ? (queue.firstBaseUpdate = capturedUpdate)
    : (workInProgress.next = capturedUpdate);
  queue.lastBaseUpdate = capturedUpdate;
}
function processUpdateQueue(
  workInProgress$jscomp$0,
  props,
  instance,
  renderLanes
) {
  var queue = workInProgress$jscomp$0.updateQueue;
  hasForceUpdate = !1;
  var firstBaseUpdate = queue.firstBaseUpdate,
    lastBaseUpdate = queue.lastBaseUpdate,
    pendingQueue = queue.shared.pending;
  if (null !== pendingQueue) {
    queue.shared.pending = null;
    var lastPendingUpdate = pendingQueue,
      firstPendingUpdate = lastPendingUpdate.next;
    lastPendingUpdate.next = null;
    null === lastBaseUpdate
      ? (firstBaseUpdate = firstPendingUpdate)
      : (lastBaseUpdate.next = firstPendingUpdate);
    lastBaseUpdate = lastPendingUpdate;
    var current = workInProgress$jscomp$0.alternate;
    null !== current &&
      ((current = current.updateQueue),
      (pendingQueue = current.lastBaseUpdate),
      pendingQueue !== lastBaseUpdate &&
        (null === pendingQueue
          ? (current.firstBaseUpdate = firstPendingUpdate)
          : (pendingQueue.next = firstPendingUpdate),
        (current.lastBaseUpdate = lastPendingUpdate)));
  }
  if (null !== firstBaseUpdate) {
    var newState = queue.baseState;
    lastBaseUpdate = 0;
    current = firstPendingUpdate = lastPendingUpdate = null;
    pendingQueue = firstBaseUpdate;
    do {
      var updateEventTime = pendingQueue.eventTime,
        updateLane = pendingQueue.lane & -1073741825,
        isHiddenUpdate = updateLane !== pendingQueue.lane;
      if (
        isHiddenUpdate
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes & updateLane) === updateLane
      ) {
        null !== current &&
          (current = current.next =
            {
              eventTime: updateEventTime,
              lane: 0,
              tag: pendingQueue.tag,
              payload: pendingQueue.payload,
              callback: null,
              next: null
            });
        a: {
          var workInProgress = workInProgress$jscomp$0,
            update = pendingQueue;
          updateLane = props;
          updateEventTime = instance;
          switch (update.tag) {
            case 1:
              workInProgress = update.payload;
              if ("function" === typeof workInProgress) {
                newState = workInProgress.call(
                  updateEventTime,
                  newState,
                  updateLane
                );
                break a;
              }
              newState = workInProgress;
              break a;
            case 3:
              workInProgress.flags = (workInProgress.flags & -65537) | 128;
            case 0:
              workInProgress = update.payload;
              updateLane =
                "function" === typeof workInProgress
                  ? workInProgress.call(updateEventTime, newState, updateLane)
                  : workInProgress;
              if (null === updateLane || void 0 === updateLane) break a;
              newState = assign({}, newState, updateLane);
              break a;
            case 2:
              hasForceUpdate = !0;
          }
        }
        updateLane = pendingQueue.callback;
        null !== updateLane &&
          ((workInProgress$jscomp$0.flags |= 64),
          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
          (isHiddenUpdate = queue.callbacks),
          null === isHiddenUpdate
            ? (queue.callbacks = [updateLane])
            : isHiddenUpdate.push(updateLane));
      } else
        (isHiddenUpdate = {
          eventTime: updateEventTime,
          lane: updateLane,
          tag: pendingQueue.tag,
          payload: pendingQueue.payload,
          callback: pendingQueue.callback,
          next: null
        }),
          null === current
            ? ((firstPendingUpdate = current = isHiddenUpdate),
              (lastPendingUpdate = newState))
            : (current = current.next = isHiddenUpdate),
          (lastBaseUpdate |= updateLane);
      pendingQueue = pendingQueue.next;
      if (null === pendingQueue)
        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
          break;
        else
          (isHiddenUpdate = pendingQueue),
            (pendingQueue = isHiddenUpdate.next),
            (isHiddenUpdate.next = null),
            (queue.lastBaseUpdate = isHiddenUpdate),
            (queue.shared.pending = null);
    } while (1);
    null === current && (lastPendingUpdate = newState);
    queue.baseState = lastPendingUpdate;
    queue.firstBaseUpdate = firstPendingUpdate;
    queue.lastBaseUpdate = current;
    null === firstBaseUpdate && (queue.shared.lanes = 0);
    workInProgressRootSkippedLanes |= lastBaseUpdate;
    workInProgress$jscomp$0.lanes = lastBaseUpdate;
    workInProgress$jscomp$0.memoizedState = newState;
  }
}
function callCallback(callback, context) {
  if ("function" !== typeof callback)
    throw Error(
      "Invalid argument passed as callback. Expected a function. Instead received: " +
        callback
    );
  callback.call(context);
}
function commitCallbacks(updateQueue, context) {
  var callbacks = updateQueue.callbacks;
  if (null !== callbacks)
    for (
      updateQueue.callbacks = null, updateQueue = 0;
      updateQueue < callbacks.length;
      updateQueue++
    )
      callCallback(callbacks[updateQueue], context);
}
function shallowEqual(objA, objB) {
  if (objectIs(objA, objB)) return !0;
  if (
    "object" !== typeof objA ||
    null === objA ||
    "object" !== typeof objB ||
    null === objB
  )
    return !1;
  var keysA = Object.keys(objA),
    keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return !1;
  for (keysB = 0; keysB < keysA.length; keysB++) {
    var currentKey = keysA[keysB];
    if (
      !hasOwnProperty.call(objB, currentKey) ||
      !objectIs(objA[currentKey], objB[currentKey])
    )
      return !1;
  }
  return !0;
}
function describeFiber(fiber) {
  switch (fiber.tag) {
    case 26:
    case 27:
    case 5:
      return describeComponentFrame(fiber.type, null, null);
    case 16:
      return describeComponentFrame("Lazy", null, null);
    case 13:
      return describeComponentFrame("Suspense", null, null);
    case 19:
      return describeComponentFrame("SuspenseList", null, null);
    case 0:
    case 2:
    case 15:
      return describeFunctionComponentFrame(fiber.type, null);
    case 11:
      return describeFunctionComponentFrame(fiber.type.render, null);
    case 1:
      return (fiber = describeFunctionComponentFrame(fiber.type, null)), fiber;
    default:
      return "";
  }
}
function coerceRef(returnFiber, current, element) {
  returnFiber = element.ref;
  if (
    null !== returnFiber &&
    "function" !== typeof returnFiber &&
    "object" !== typeof returnFiber
  ) {
    if (element._owner) {
      element = element._owner;
      if (element) {
        if (1 !== element.tag)
          throw Error(
            "Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref"
          );
        var inst = element.stateNode;
      }
      if (!inst)
        throw Error(
          "Missing owner for string ref " +
            returnFiber +
            ". This error is likely caused by a bug in React. Please file an issue."
        );
      var resolvedInst = inst,
        stringRef = "" + returnFiber;
      if (
        null !== current &&
        null !== current.ref &&
        "function" === typeof current.ref &&
        current.ref._stringRef === stringRef
      )
        return current.ref;
      current = function (value) {
        var refs = resolvedInst.refs;
        null === value ? delete refs[stringRef] : (refs[stringRef] = value);
      };
      current._stringRef = stringRef;
      return current;
    }
    if ("string" !== typeof returnFiber)
      throw Error(
        "Expected ref to be a function, a string, an object returned by React.createRef(), or null."
      );
    if (!element._owner)
      throw Error(
        "Element ref was specified as a string (" +
          returnFiber +
          ") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information."
      );
  }
  return returnFiber;
}
function throwOnInvalidObjectType(returnFiber, newChild) {
  returnFiber = Object.prototype.toString.call(newChild);
  throw Error(
    "Objects are not valid as a React child (found: " +
      ("[object Object]" === returnFiber
        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
        : returnFiber) +
      "). If you meant to render a collection of children, use an array instead."
  );
}
function resolveLazy(lazyType) {
  var init = lazyType._init;
  return init(lazyType._payload);
}
function createChildReconciler(shouldTrackSideEffects) {
  function deleteChild(returnFiber, childToDelete) {
    if (shouldTrackSideEffects) {
      var deletions = returnFiber.deletions;
      null === deletions
        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
        : deletions.push(childToDelete);
    }
  }
  function deleteRemainingChildren(returnFiber, currentFirstChild) {
    if (!shouldTrackSideEffects) return null;
    for (; null !== currentFirstChild; )
      deleteChild(returnFiber, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return null;
  }
  function mapRemainingChildren(returnFiber, currentFirstChild) {
    for (returnFiber = new Map(); null !== currentFirstChild; )
      null !== currentFirstChild.key
        ? returnFiber.set(currentFirstChild.key, currentFirstChild)
        : returnFiber.set(currentFirstChild.index, currentFirstChild),
        (currentFirstChild = currentFirstChild.sibling);
    return returnFiber;
  }
  function useFiber(fiber, pendingProps) {
    fiber = createWorkInProgress(fiber, pendingProps);
    fiber.index = 0;
    fiber.sibling = null;
    return fiber;
  }
  function placeChild(newFiber, lastPlacedIndex, newIndex) {
    newFiber.index = newIndex;
    if (!shouldTrackSideEffects)
      return (newFiber.flags |= 1048576), lastPlacedIndex;
    newIndex = newFiber.alternate;
    if (null !== newIndex)
      return (
        (newIndex = newIndex.index),
        newIndex < lastPlacedIndex
          ? ((newFiber.flags |= 16777218), lastPlacedIndex)
          : newIndex
      );
    newFiber.flags |= 16777218;
    return lastPlacedIndex;
  }
  function placeSingleChild(newFiber) {
    shouldTrackSideEffects &&
      null === newFiber.alternate &&
      (newFiber.flags |= 16777218);
    return newFiber;
  }
  function updateTextNode(returnFiber, current, textContent, lanes) {
    if (null === current || 6 !== current.tag)
      return (
        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, textContent);
    current.return = returnFiber;
    return current;
  }
  function updateElement(returnFiber, current, element, lanes) {
    var elementType = element.type;
    if (elementType === REACT_FRAGMENT_TYPE)
      return updateFragment(
        returnFiber,
        current,
        element.props.children,
        lanes,
        element.key
      );
    if (
      null !== current &&
      (current.elementType === elementType ||
        ("object" === typeof elementType &&
          null !== elementType &&
          elementType.$$typeof === REACT_LAZY_TYPE &&
          resolveLazy(elementType) === current.type))
    )
      return (
        (lanes = useFiber(current, element.props)),
        (lanes.ref = coerceRef(returnFiber, current, element)),
        (lanes.return = returnFiber),
        lanes
      );
    lanes = createFiberFromTypeAndProps(
      element.type,
      element.key,
      element.props,
      null,
      returnFiber.mode,
      lanes
    );
    lanes.ref = coerceRef(returnFiber, current, element);
    lanes.return = returnFiber;
    return lanes;
  }
  function updatePortal(returnFiber, current, portal, lanes) {
    if (
      null === current ||
      4 !== current.tag ||
      current.stateNode.containerInfo !== portal.containerInfo ||
      current.stateNode.implementation !== portal.implementation
    )
      return (
        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, portal.children || []);
    current.return = returnFiber;
    return current;
  }
  function updateFragment(returnFiber, current, fragment, lanes, key) {
    if (null === current || 7 !== current.tag)
      return (
        (current = createFiberFromFragment(
          fragment,
          returnFiber.mode,
          lanes,
          key
        )),
        (current.return = returnFiber),
        current
      );
    current = useFiber(current, fragment);
    current.return = returnFiber;
    return current;
  }
  function createChild(returnFiber, newChild, lanes) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild
    )
      return (
        (newChild = createFiberFromText(
          "" + newChild,
          returnFiber.mode,
          lanes
        )),
        (newChild.return = returnFiber),
        newChild
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (lanes = createFiberFromTypeAndProps(
              newChild.type,
              newChild.key,
              newChild.props,
              null,
              returnFiber.mode,
              lanes
            )),
            (lanes.ref = coerceRef(returnFiber, null, newChild)),
            (lanes.return = returnFiber),
            lanes
          );
        case REACT_PORTAL_TYPE:
          return (
            (newChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (newChild.return = returnFiber),
            newChild
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          return createChild(returnFiber, init(newChild._payload), lanes);
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (newChild = createFiberFromFragment(
            newChild,
            returnFiber.mode,
            lanes,
            null
          )),
          (newChild.return = returnFiber),
          newChild
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
    var key = null !== oldFiber ? oldFiber.key : null;
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild
    )
      return null !== key
        ? null
        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return newChild.key === key
            ? updateElement(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_PORTAL_TYPE:
          return newChild.key === key
            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
            : null;
        case REACT_LAZY_TYPE:
          return (
            (key = newChild._init),
            updateSlot(returnFiber, oldFiber, key(newChild._payload), lanes)
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return null !== key
          ? null
          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function updateFromMap(
    existingChildren,
    returnFiber,
    newIdx,
    newChild,
    lanes
  ) {
    if (
      ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild
    )
      return (
        (existingChildren = existingChildren.get(newIdx) || null),
        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
      );
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updateElement(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_PORTAL_TYPE:
          return (
            (existingChildren =
              existingChildren.get(
                null === newChild.key ? newIdx : newChild.key
              ) || null),
            updatePortal(returnFiber, existingChildren, newChild, lanes)
          );
        case REACT_LAZY_TYPE:
          var init = newChild._init;
          return updateFromMap(
            existingChildren,
            returnFiber,
            newIdx,
            init(newChild._payload),
            lanes
          );
      }
      if (isArrayImpl(newChild) || getIteratorFn(newChild))
        return (
          (existingChildren = existingChildren.get(newIdx) || null),
          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return null;
  }
  function reconcileChildrenArray(
    returnFiber,
    currentFirstChild,
    newChildren,
    lanes
  ) {
    for (
      var resultingFirstChild = null,
        previousNewFiber = null,
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null;
      null !== oldFiber && newIdx < newChildren.length;
      newIdx++
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(
        returnFiber,
        oldFiber,
        newChildren[newIdx],
        lanes
      );
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (resultingFirstChild = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (newIdx === newChildren.length)
      return (
        deleteRemainingChildren(returnFiber, oldFiber), resultingFirstChild
      );
    if (null === oldFiber) {
      for (; newIdx < newChildren.length; newIdx++)
        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
          null !== oldFiber &&
            ((currentFirstChild = placeChild(
              oldFiber,
              currentFirstChild,
              newIdx
            )),
            null === previousNewFiber
              ? (resultingFirstChild = oldFiber)
              : (previousNewFiber.sibling = oldFiber),
            (previousNewFiber = oldFiber));
      return resultingFirstChild;
    }
    for (
      oldFiber = mapRemainingChildren(returnFiber, oldFiber);
      newIdx < newChildren.length;
      newIdx++
    )
      (nextOldFiber = updateFromMap(
        oldFiber,
        returnFiber,
        newIdx,
        newChildren[newIdx],
        lanes
      )),
        null !== nextOldFiber &&
          (shouldTrackSideEffects &&
            null !== nextOldFiber.alternate &&
            oldFiber.delete(
              null === nextOldFiber.key ? newIdx : nextOldFiber.key
            ),
          (currentFirstChild = placeChild(
            nextOldFiber,
            currentFirstChild,
            newIdx
          )),
          null === previousNewFiber
            ? (resultingFirstChild = nextOldFiber)
            : (previousNewFiber.sibling = nextOldFiber),
          (previousNewFiber = nextOldFiber));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    return resultingFirstChild;
  }
  function reconcileChildrenIterator(
    returnFiber,
    currentFirstChild,
    newChildrenIterable,
    lanes
  ) {
    var iteratorFn = getIteratorFn(newChildrenIterable);
    if ("function" !== typeof iteratorFn)
      throw Error(
        "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
      );
    newChildrenIterable = iteratorFn.call(newChildrenIterable);
    if (null == newChildrenIterable)
      throw Error("An iterable object provided no iterator.");
    for (
      var previousNewFiber = (iteratorFn = null),
        oldFiber = currentFirstChild,
        newIdx = (currentFirstChild = 0),
        nextOldFiber = null,
        step = newChildrenIterable.next();
      null !== oldFiber && !step.done;
      newIdx++, step = newChildrenIterable.next()
    ) {
      oldFiber.index > newIdx
        ? ((nextOldFiber = oldFiber), (oldFiber = null))
        : (nextOldFiber = oldFiber.sibling);
      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
      if (null === newFiber) {
        null === oldFiber && (oldFiber = nextOldFiber);
        break;
      }
      shouldTrackSideEffects &&
        oldFiber &&
        null === newFiber.alternate &&
        deleteChild(returnFiber, oldFiber);
      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
      null === previousNewFiber
        ? (iteratorFn = newFiber)
        : (previousNewFiber.sibling = newFiber);
      previousNewFiber = newFiber;
      oldFiber = nextOldFiber;
    }
    if (step.done)
      return deleteRemainingChildren(returnFiber, oldFiber), iteratorFn;
    if (null === oldFiber) {
      for (; !step.done; newIdx++, step = newChildrenIterable.next())
        (step = createChild(returnFiber, step.value, lanes)),
          null !== step &&
            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
            null === previousNewFiber
              ? (iteratorFn = step)
              : (previousNewFiber.sibling = step),
            (previousNewFiber = step));
      return iteratorFn;
    }
    for (
      oldFiber = mapRemainingChildren(returnFiber, oldFiber);
      !step.done;
      newIdx++, step = newChildrenIterable.next()
    )
      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
        null !== step &&
          (shouldTrackSideEffects &&
            null !== step.alternate &&
            oldFiber.delete(null === step.key ? newIdx : step.key),
          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
          null === previousNewFiber
            ? (iteratorFn = step)
            : (previousNewFiber.sibling = step),
          (previousNewFiber = step));
    shouldTrackSideEffects &&
      oldFiber.forEach(function (child) {
        return deleteChild(returnFiber, child);
      });
    return iteratorFn;
  }
  function reconcileChildFibers(
    returnFiber,
    currentFirstChild,
    newChild,
    lanes
  ) {
    "object" === typeof newChild &&
      null !== newChild &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      null === newChild.key &&
      (newChild = newChild.props.children);
    if ("object" === typeof newChild && null !== newChild) {
      switch (newChild.$$typeof) {
        case REACT_ELEMENT_TYPE:
          a: {
            for (
              var key = newChild.key, child = currentFirstChild;
              null !== child;

            ) {
              if (child.key === key) {
                key = newChild.type;
                if (key === REACT_FRAGMENT_TYPE) {
                  if (7 === child.tag) {
                    deleteRemainingChildren(returnFiber, child.sibling);
                    currentFirstChild = useFiber(
                      child,
                      newChild.props.children
                    );
                    currentFirstChild.return = returnFiber;
                    returnFiber = currentFirstChild;
                    break a;
                  }
                } else if (
                  child.elementType === key ||
                  ("object" === typeof key &&
                    null !== key &&
                    key.$$typeof === REACT_LAZY_TYPE &&
                    resolveLazy(key) === child.type)
                ) {
                  deleteRemainingChildren(returnFiber, child.sibling);
                  currentFirstChild = useFiber(child, newChild.props);
                  currentFirstChild.ref = coerceRef(
                    returnFiber,
                    child,
                    newChild
                  );
                  currentFirstChild.return = returnFiber;
                  returnFiber = currentFirstChild;
                  break a;
                }
                deleteRemainingChildren(returnFiber, child);
                break;
              } else deleteChild(returnFiber, child);
              child = child.sibling;
            }
            newChild.type === REACT_FRAGMENT_TYPE
              ? ((currentFirstChild = createFiberFromFragment(
                  newChild.props.children,
                  returnFiber.mode,
                  lanes,
                  newChild.key
                )),
                (currentFirstChild.return = returnFiber),
                (returnFiber = currentFirstChild))
              : ((lanes = createFiberFromTypeAndProps(
                  newChild.type,
                  newChild.key,
                  newChild.props,
                  null,
                  returnFiber.mode,
                  lanes
                )),
                (lanes.ref = coerceRef(
                  returnFiber,
                  currentFirstChild,
                  newChild
                )),
                (lanes.return = returnFiber),
                (returnFiber = lanes));
          }
          return placeSingleChild(returnFiber);
        case REACT_PORTAL_TYPE:
          a: {
            for (child = newChild.key; null !== currentFirstChild; ) {
              if (currentFirstChild.key === child)
                if (
                  4 === currentFirstChild.tag &&
                  currentFirstChild.stateNode.containerInfo ===
                    newChild.containerInfo &&
                  currentFirstChild.stateNode.implementation ===
                    newChild.implementation
                ) {
                  deleteRemainingChildren(
                    returnFiber,
                    currentFirstChild.sibling
                  );
                  currentFirstChild = useFiber(
                    currentFirstChild,
                    newChild.children || []
                  );
                  currentFirstChild.return = returnFiber;
                  returnFiber = currentFirstChild;
                  break a;
                } else {
                  deleteRemainingChildren(returnFiber, currentFirstChild);
                  break;
                }
              else deleteChild(returnFiber, currentFirstChild);
              currentFirstChild = currentFirstChild.sibling;
            }
            currentFirstChild = createFiberFromPortal(
              newChild,
              returnFiber.mode,
              lanes
            );
            currentFirstChild.return = returnFiber;
            returnFiber = currentFirstChild;
          }
          return placeSingleChild(returnFiber);
        case REACT_LAZY_TYPE:
          return (
            (child = newChild._init),
            reconcileChildFibers(
              returnFiber,
              currentFirstChild,
              child(newChild._payload),
              lanes
            )
          );
      }
      if (isArrayImpl(newChild))
        return reconcileChildrenArray(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      if (getIteratorFn(newChild))
        return reconcileChildrenIterator(
          returnFiber,
          currentFirstChild,
          newChild,
          lanes
        );
      throwOnInvalidObjectType(returnFiber, newChild);
    }
    return ("string" === typeof newChild && "" !== newChild) ||
      "number" === typeof newChild
      ? ((newChild = "" + newChild),
        null !== currentFirstChild && 6 === currentFirstChild.tag
          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
            (currentFirstChild = useFiber(currentFirstChild, newChild)),
            (currentFirstChild.return = returnFiber),
            (returnFiber = currentFirstChild))
          : (deleteRemainingChildren(returnFiber, currentFirstChild),
            (currentFirstChild = createFiberFromText(
              newChild,
              returnFiber.mode,
              lanes
            )),
            (currentFirstChild.return = returnFiber),
            (returnFiber = currentFirstChild)),
        placeSingleChild(returnFiber))
      : deleteRemainingChildren(returnFiber, currentFirstChild);
  }
  return reconcileChildFibers;
}
var reconcileChildFibers = createChildReconciler(!0),
  mountChildFibers = createChildReconciler(!1),
  currentTreeHiddenStackCursor = createCursor(null),
  prevRenderLanesStackCursor = createCursor(0);
function pushHiddenContext(fiber, context) {
  fiber = renderLanes;
  push(prevRenderLanesStackCursor, fiber);
  push(currentTreeHiddenStackCursor, context);
  renderLanes = fiber | context.baseLanes;
}
function reuseHiddenContextOnStack() {
  push(prevRenderLanesStackCursor, renderLanes);
  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
}
function popHiddenContext() {
  renderLanes = prevRenderLanesStackCursor.current;
  pop(currentTreeHiddenStackCursor);
  pop(prevRenderLanesStackCursor);
}
var suspenseHandlerStackCursor = createCursor(null),
  shellBoundary = null;
function pushPrimaryTreeSuspenseHandler(handler) {
  var current = handler.alternate;
  push(suspenseHandlerStackCursor, handler);
  null === shellBoundary &&
    (null === current || null !== currentTreeHiddenStackCursor.current
      ? (shellBoundary = handler)
      : null !== current.memoizedState && (shellBoundary = handler));
}
function pushOffscreenSuspenseHandler(fiber) {
  if (22 === fiber.tag) {
    if ((push(suspenseHandlerStackCursor, fiber), null === shellBoundary)) {
      var current = fiber.alternate;
      null !== current &&
        null !== current.memoizedState &&
        (shellBoundary = fiber);
    }
  } else reuseSuspenseHandlerOnStack();
}
function reuseSuspenseHandlerOnStack() {
  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
}
function popSuspenseHandler(fiber) {
  pop(suspenseHandlerStackCursor);
  shellBoundary === fiber && (shellBoundary = null);
}
var suspenseStackCursor = createCursor(0);
function findFirstSuspended(row) {
  for (var node = row; null !== node; ) {
    if (13 === node.tag) {
      var state = node.memoizedState;
      if (null !== state && (null === state.dehydrated || shim() || shim()))
        return node;
    } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
      if (0 !== (node.flags & 128)) return node;
    } else if (null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === row) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === row) return null;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
  return null;
}
var workInProgressSources = [];
function resetWorkInProgressVersions() {
  for (var i = 0; i < workInProgressSources.length; i++)
    workInProgressSources[i]._workInProgressVersionSecondary = null;
  workInProgressSources.length = 0;
}
var SuspenseException = Error(
  "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
);
function isThenableResolved(thenable) {
  thenable = thenable.status;
  return "fulfilled" === thenable || "rejected" === thenable;
}
function noop() {}
function trackUsedThenable(thenableState, thenable, index) {
  index = thenableState[index];
  void 0 === index
    ? thenableState.push(thenable)
    : index !== thenable && (thenable.then(noop, noop), (thenable = index));
  switch (thenable.status) {
    case "fulfilled":
      return thenable.value;
    case "rejected":
      throw thenable.reason;
    default:
      "string" === typeof thenable.status
        ? thenable.then(noop, noop)
        : ((thenableState = thenable),
          (thenableState.status = "pending"),
          thenableState.then(
            function (fulfilledValue) {
              if ("pending" === thenable.status) {
                var fulfilledThenable = thenable;
                fulfilledThenable.status = "fulfilled";
                fulfilledThenable.value = fulfilledValue;
              }
            },
            function (error) {
              if ("pending" === thenable.status) {
                var rejectedThenable = thenable;
                rejectedThenable.status = "rejected";
                rejectedThenable.reason = error;
              }
            }
          ));
      switch (thenable.status) {
        case "fulfilled":
          return thenable.value;
        case "rejected":
          throw thenable.reason;
      }
      suspendedThenable = thenable;
      throw SuspenseException;
  }
}
var suspendedThenable = null,
  ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher,
  ReactCurrentBatchConfig$2 = ReactSharedInternals.ReactCurrentBatchConfig,
  renderLanes$1 = 0,
  currentlyRenderingFiber$1 = null,
  currentHook = null,
  workInProgressHook = null,
  didScheduleRenderPhaseUpdate = !1,
  didScheduleRenderPhaseUpdateDuringThisPass = !1,
  shouldDoubleInvokeUserFnsInHooksDEV = !1,
  thenableIndexCounter = 0,
  thenableState = null,
  globalClientIdCounter = 0;
function throwInvalidHookError() {
  throw Error(
    "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."
  );
}
function areHookInputsEqual(nextDeps, prevDeps) {
  if (null === prevDeps) return !1;
  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
    if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
  return !0;
}
function renderWithHooks(
  current,
  workInProgress,
  Component,
  props,
  secondArg,
  nextRenderLanes
) {
  renderLanes$1 = nextRenderLanes;
  currentlyRenderingFiber$1 = workInProgress;
  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = 0;
  ReactCurrentDispatcher$1.current =
    null === current || null === current.memoizedState
      ? HooksDispatcherOnMount
      : HooksDispatcherOnUpdate;
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  current = Component(props, secondArg);
  shouldDoubleInvokeUserFnsInHooksDEV = !1;
  didScheduleRenderPhaseUpdateDuringThisPass &&
    (current = renderWithHooksAgain(
      workInProgress,
      Component,
      props,
      secondArg
    ));
  finishRenderingHooks();
  return current;
}
function finishRenderingHooks() {
  ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
  renderLanes$1 = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
  didScheduleRenderPhaseUpdate = !1;
  thenableIndexCounter = 0;
  thenableState = null;
  if (didRenderTooFewHooks)
    throw Error(
      "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
    );
}
function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
  var numberOfReRenders = 0;
  do {
    didScheduleRenderPhaseUpdateDuringThisPass = !1;
    thenableIndexCounter = 0;
    if (25 <= numberOfReRenders)
      throw Error(
        "Too many re-renders. React limits the number of renders to prevent an infinite loop."
      );
    numberOfReRenders += 1;
    workInProgressHook = currentHook = null;
    workInProgress.updateQueue = null;
    ReactCurrentDispatcher$1.current = HooksDispatcherOnRerender;
    var children = Component(props, secondArg);
  } while (didScheduleRenderPhaseUpdateDuringThisPass);
  return children;
}
function bailoutHooks(current, workInProgress, lanes) {
  workInProgress.updateQueue = current.updateQueue;
  workInProgress.flags &= -2053;
  current.lanes &= ~lanes;
}
function resetHooksOnUnwind() {
  if (didScheduleRenderPhaseUpdate) {
    for (var hook = currentlyRenderingFiber$1.memoizedState; null !== hook; ) {
      var queue = hook.queue;
      null !== queue && (queue.pending = null);
      hook = hook.next;
    }
    didScheduleRenderPhaseUpdate = !1;
  }
  renderLanes$1 = 0;
  workInProgressHook = currentHook = currentlyRenderingFiber$1 = null;
  didScheduleRenderPhaseUpdateDuringThisPass = !1;
  thenableIndexCounter = 0;
  thenableState = null;
}
function mountWorkInProgressHook() {
  var hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  null === workInProgressHook
    ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook = hook)
    : (workInProgressHook = workInProgressHook.next = hook);
  return workInProgressHook;
}
function updateWorkInProgressHook() {
  if (null === currentHook) {
    var nextCurrentHook = currentlyRenderingFiber$1.alternate;
    nextCurrentHook =
      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
  } else nextCurrentHook = currentHook.next;
  var nextWorkInProgressHook =
    null === workInProgressHook
      ? currentlyRenderingFiber$1.memoizedState
      : workInProgressHook.next;
  if (null !== nextWorkInProgressHook)
    (workInProgressHook = nextWorkInProgressHook),
      (currentHook = nextCurrentHook);
  else {
    if (null === nextCurrentHook)
      if (null === currentlyRenderingFiber$1.alternate)
        nextCurrentHook = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null
        };
      else throw Error("Rendered more hooks than during the previous render.");
    currentHook = nextCurrentHook;
    nextCurrentHook = {
      memoizedState: currentHook.memoizedState,
      baseState: currentHook.baseState,
      baseQueue: currentHook.baseQueue,
      queue: currentHook.queue,
      next: null
    };
    null === workInProgressHook
      ? (currentlyRenderingFiber$1.memoizedState = workInProgressHook =
          nextCurrentHook)
      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
  }
  return workInProgressHook;
}
var createFunctionComponentUpdateQueue;
createFunctionComponentUpdateQueue = function () {
  return { lastEffect: null, events: null, stores: null };
};
function use(usable) {
  if (null !== usable && "object" === typeof usable) {
    if ("function" === typeof usable.then) {
      var index$24 = thenableIndexCounter;
      thenableIndexCounter += 1;
      null === thenableState && (thenableState = []);
      return trackUsedThenable(thenableState, usable, index$24);
    }
    if (
      usable.$$typeof === REACT_CONTEXT_TYPE ||
      usable.$$typeof === REACT_SERVER_CONTEXT_TYPE
    )
      return readContext(usable);
  }
  throw Error("An unsupported type was passed to use(): " + String(usable));
}
function basicStateReducer(state, action) {
  return "function" === typeof action ? action(state) : action;
}
function updateReducer(reducer) {
  var hook = updateWorkInProgressHook(),
    queue = hook.queue;
  if (null === queue)
    throw Error(
      "Should have a queue. This is likely a bug in React. Please file an issue."
    );
  queue.lastRenderedReducer = reducer;
  var current = currentHook,
    baseQueue = current.baseQueue,
    pendingQueue = queue.pending;
  if (null !== pendingQueue) {
    if (null !== baseQueue) {
      var baseFirst = baseQueue.next;
      baseQueue.next = pendingQueue.next;
      pendingQueue.next = baseFirst;
    }
    current.baseQueue = baseQueue = pendingQueue;
    queue.pending = null;
  }
  if (null !== baseQueue) {
    pendingQueue = baseQueue.next;
    current = current.baseState;
    var newBaseQueueFirst = (baseFirst = null),
      newBaseQueueLast = null,
      update = pendingQueue;
    do {
      var updateLane = update.lane & -1073741825;
      if (
        updateLane !== update.lane
          ? (workInProgressRootRenderLanes & updateLane) === updateLane
          : (renderLanes$1 & updateLane) === updateLane
      )
        null !== newBaseQueueLast &&
          (newBaseQueueLast = newBaseQueueLast.next =
            {
              lane: 0,
              action: update.action,
              hasEagerState: update.hasEagerState,
              eagerState: update.eagerState,
              next: null
            }),
          (updateLane = update.action),
          shouldDoubleInvokeUserFnsInHooksDEV && reducer(current, updateLane),
          (current = update.hasEagerState
            ? update.eagerState
            : reducer(current, updateLane));
      else {
        var clone = {
          lane: updateLane,
          action: update.action,
          hasEagerState: update.hasEagerState,
          eagerState: update.eagerState,
          next: null
        };
        null === newBaseQueueLast
          ? ((newBaseQueueFirst = newBaseQueueLast = clone),
            (baseFirst = current))
          : (newBaseQueueLast = newBaseQueueLast.next = clone);
        currentlyRenderingFiber$1.lanes |= updateLane;
        workInProgressRootSkippedLanes |= updateLane;
      }
      update = update.next;
    } while (null !== update && update !== pendingQueue);
    null === newBaseQueueLast
      ? (baseFirst = current)
      : (newBaseQueueLast.next = newBaseQueueFirst);
    objectIs(current, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = current;
    hook.baseState = baseFirst;
    hook.baseQueue = newBaseQueueLast;
    queue.lastRenderedState = current;
  }
  null === baseQueue && (queue.lanes = 0);
  return [hook.memoizedState, queue.dispatch];
}
function rerenderReducer(reducer) {
  var hook = updateWorkInProgressHook(),
    queue = hook.queue;
  if (null === queue)
    throw Error(
      "Should have a queue. This is likely a bug in React. Please file an issue."
    );
  queue.lastRenderedReducer = reducer;
  var dispatch = queue.dispatch,
    lastRenderPhaseUpdate = queue.pending,
    newState = hook.memoizedState;
  if (null !== lastRenderPhaseUpdate) {
    queue.pending = null;
    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
    do (newState = reducer(newState, update.action)), (update = update.next);
    while (update !== lastRenderPhaseUpdate);
    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
    hook.memoizedState = newState;
    null === hook.baseQueue && (hook.baseState = newState);
    queue.lastRenderedState = newState;
  }
  return [newState, dispatch];
}
function updateMutableSource() {}
function updateSyncExternalStore(subscribe, getSnapshot) {
  var fiber = currentlyRenderingFiber$1,
    hook = updateWorkInProgressHook(),
    nextSnapshot = getSnapshot(),
    snapshotChanged = !objectIs(
      (currentHook || hook).memoizedState,
      nextSnapshot
    );
  snapshotChanged &&
    ((hook.memoizedState = nextSnapshot), (didReceiveUpdate = !0));
  hook = hook.queue;
  updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
    subscribe
  ]);
  if (
    hook.getSnapshot !== getSnapshot ||
    snapshotChanged ||
    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
  ) {
    fiber.flags |= 2048;
    pushEffect(
      9,
      updateStoreInstance.bind(null, fiber, hook, nextSnapshot, getSnapshot),
      void 0,
      null
    );
    subscribe = workInProgressRoot;
    if (null === subscribe)
      throw Error(
        "Expected a work-in-progress root. This is a bug in React. Please file an issue."
      );
    includesBlockingLane(subscribe, renderLanes$1) ||
      pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
  }
  return nextSnapshot;
}
function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
  fiber.flags |= 16384;
  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
  getSnapshot = currentlyRenderingFiber$1.updateQueue;
  null === getSnapshot
    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber$1.updateQueue = getSnapshot),
      (getSnapshot.stores = [fiber]))
    : ((renderedSnapshot = getSnapshot.stores),
      null === renderedSnapshot
        ? (getSnapshot.stores = [fiber])
        : renderedSnapshot.push(fiber));
}
function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
  inst.value = nextSnapshot;
  inst.getSnapshot = getSnapshot;
  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
}
function subscribeToStore(fiber, inst, subscribe) {
  return subscribe(function () {
    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
  });
}
function checkIfSnapshotChanged(inst) {
  var latestGetSnapshot = inst.getSnapshot;
  inst = inst.value;
  try {
    var nextValue = latestGetSnapshot();
    return !objectIs(inst, nextValue);
  } catch (error) {
    return !0;
  }
}
function forceStoreRerender(fiber) {
  var root = enqueueConcurrentRenderForLane(fiber, 2);
  null !== root && scheduleUpdateOnFiber(root, fiber, 2, -1);
}
function mountState(initialState) {
  var hook = mountWorkInProgressHook();
  "function" === typeof initialState && (initialState = initialState());
  hook.memoizedState = hook.baseState = initialState;
  initialState = {
    pending: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState
  };
  hook.queue = initialState;
  initialState = initialState.dispatch = dispatchSetState.bind(
    null,
    currentlyRenderingFiber$1,
    initialState
  );
  return [hook.memoizedState, initialState];
}
function pushEffect(tag, create, destroy, deps) {
  tag = { tag: tag, create: create, destroy: destroy, deps: deps, next: null };
  create = currentlyRenderingFiber$1.updateQueue;
  null === create
    ? ((create = createFunctionComponentUpdateQueue()),
      (currentlyRenderingFiber$1.updateQueue = create),
      (create.lastEffect = tag.next = tag))
    : ((destroy = create.lastEffect),
      null === destroy
        ? (create.lastEffect = tag.next = tag)
        : ((deps = destroy.next),
          (destroy.next = tag),
          (tag.next = deps),
          (create.lastEffect = tag)));
  return tag;
}
function updateRef() {
  return updateWorkInProgressHook().memoizedState;
}
function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = mountWorkInProgressHook();
  currentlyRenderingFiber$1.flags |= fiberFlags;
  hook.memoizedState = pushEffect(
    1 | hookFlags,
    create,
    void 0,
    void 0 === deps ? null : deps
  );
}
function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var destroy = void 0;
  if (null !== currentHook) {
    var prevEffect = currentHook.memoizedState;
    destroy = prevEffect.destroy;
    if (null !== deps && areHookInputsEqual(deps, prevEffect.deps)) {
      hook.memoizedState = pushEffect(hookFlags, create, destroy, deps);
      return;
    }
  }
  currentlyRenderingFiber$1.flags |= fiberFlags;
  hook.memoizedState = pushEffect(1 | hookFlags, create, destroy, deps);
}
function mountEffect(create, deps) {
  mountEffectImpl(8390656, 8, create, deps);
}
function updateEffect(create, deps) {
  updateEffectImpl(2048, 8, create, deps);
}
function updateInsertionEffect(create, deps) {
  return updateEffectImpl(4, 2, create, deps);
}
function updateLayoutEffect(create, deps) {
  return updateEffectImpl(4, 4, create, deps);
}
function imperativeHandleEffect(create, ref) {
  if ("function" === typeof ref)
    return (
      (create = create()),
      ref(create),
      function () {
        ref(null);
      }
    );
  if (null !== ref && void 0 !== ref)
    return (
      (create = create()),
      (ref.current = create),
      function () {
        ref.current = null;
      }
    );
}
function updateImperativeHandle(ref, create, deps) {
  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
}
function mountDebugValue() {}
function updateCallback(callback, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (
    null !== prevState &&
    null !== deps &&
    areHookInputsEqual(deps, prevState[1])
  )
    return prevState[0];
  hook.memoizedState = [callback, deps];
  return callback;
}
function updateMemo(nextCreate, deps) {
  var hook = updateWorkInProgressHook();
  deps = void 0 === deps ? null : deps;
  var prevState = hook.memoizedState;
  if (
    null !== prevState &&
    null !== deps &&
    areHookInputsEqual(deps, prevState[1])
  )
    return prevState[0];
  shouldDoubleInvokeUserFnsInHooksDEV && nextCreate();
  nextCreate = nextCreate();
  hook.memoizedState = [nextCreate, deps];
  return nextCreate;
}
function updateDeferredValueImpl(hook, prevValue, value) {
  if (0 === (renderLanes$1 & 42))
    return (
      hook.baseState && ((hook.baseState = !1), (didReceiveUpdate = !0)),
      (hook.memoizedState = value)
    );
  objectIs(value, prevValue) ||
    ((value = claimNextTransitionLane()),
    (currentlyRenderingFiber$1.lanes |= value),
    (workInProgressRootSkippedLanes |= value),
    (hook.baseState = !0));
  return prevValue;
}
function startTransition(setPending, callback) {
  var previousPriority = currentUpdatePriority;
  currentUpdatePriority =
    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
  setPending(!0);
  var prevTransition = ReactCurrentBatchConfig$2.transition;
  ReactCurrentBatchConfig$2.transition = {};
  try {
    setPending(!1), callback();
  } finally {
    (currentUpdatePriority = previousPriority),
      (ReactCurrentBatchConfig$2.transition = prevTransition);
  }
}
function updateId() {
  return updateWorkInProgressHook().memoizedState;
}
function updateRefresh() {
  return updateWorkInProgressHook().memoizedState;
}
function refreshCache(fiber) {
  for (var provider = fiber.return; null !== provider; ) {
    switch (provider.tag) {
      case 24:
      case 3:
        var lane = requestUpdateLane(provider),
          eventTime = requestEventTime();
        fiber = createUpdate(eventTime, lane);
        var root = enqueueUpdate(provider, fiber, lane);
        null !== root &&
          (scheduleUpdateOnFiber(root, provider, lane, eventTime),
          entangleTransitions(root, provider, lane));
        provider = { cache: createCache() };
        fiber.payload = provider;
        return;
    }
    provider = provider.return;
  }
}
function dispatchReducerAction(fiber, queue, action) {
  var lane = requestUpdateLane(fiber);
  action = {
    lane: lane,
    action: action,
    hasEagerState: !1,
    eagerState: null,
    next: null
  };
  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, action);
  else if (
    (enqueueUpdate$1(fiber, queue, action, lane),
    (action = getRootForUpdatedFiber(fiber)),
    null !== action)
  ) {
    var eventTime = requestEventTime();
    scheduleUpdateOnFiber(action, fiber, lane, eventTime);
    entangleTransitionUpdate(action, queue, lane);
  }
}
function dispatchSetState(fiber, queue, action) {
  var lane = requestUpdateLane(fiber),
    update = {
      lane: lane,
      action: action,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
  else {
    var alternate = fiber.alternate;
    if (
      0 === fiber.lanes &&
      (null === alternate || 0 === alternate.lanes) &&
      ((alternate = queue.lastRenderedReducer), null !== alternate)
    )
      try {
        var currentState = queue.lastRenderedState,
          eagerState = alternate(currentState, action);
        update.hasEagerState = !0;
        update.eagerState = eagerState;
        if (objectIs(eagerState, currentState)) {
          enqueueUpdate$1(fiber, queue, update, 0);
          null === workInProgressRoot && finishQueueingConcurrentUpdates();
          return;
        }
      } catch (error) {
      } finally {
      }
    enqueueUpdate$1(fiber, queue, update, lane);
    action = getRootForUpdatedFiber(fiber);
    null !== action &&
      ((update = requestEventTime()),
      scheduleUpdateOnFiber(action, fiber, lane, update),
      entangleTransitionUpdate(action, queue, lane));
  }
}
function isRenderPhaseUpdate(fiber) {
  var alternate = fiber.alternate;
  return (
    fiber === currentlyRenderingFiber$1 ||
    (null !== alternate && alternate === currentlyRenderingFiber$1)
  );
}
function enqueueRenderPhaseUpdate(queue, update) {
  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
    !0;
  var pending = queue.pending;
  null === pending
    ? (update.next = update)
    : ((update.next = pending.next), (pending.next = update));
  queue.pending = update;
}
function entangleTransitionUpdate(root, queue, lane) {
  if (0 !== (lane & 8388480)) {
    var queueLanes = queue.lanes;
    queueLanes &= root.pendingLanes;
    lane |= queueLanes;
    queue.lanes = lane;
    markRootEntangled(root, lane);
  }
}
var ContextOnlyDispatcher = {
  readContext: readContext,
  useCallback: throwInvalidHookError,
  useContext: throwInvalidHookError,
  useEffect: throwInvalidHookError,
  useImperativeHandle: throwInvalidHookError,
  useInsertionEffect: throwInvalidHookError,
  useLayoutEffect: throwInvalidHookError,
  useMemo: throwInvalidHookError,
  useReducer: throwInvalidHookError,
  useRef: throwInvalidHookError,
  useState: throwInvalidHookError,
  useDebugValue: throwInvalidHookError,
  useDeferredValue: throwInvalidHookError,
  useTransition: throwInvalidHookError,
  useMutableSource: throwInvalidHookError,
  useSyncExternalStore: throwInvalidHookError,
  useId: throwInvalidHookError
};
ContextOnlyDispatcher.useCacheRefresh = throwInvalidHookError;
ContextOnlyDispatcher.use = throwInvalidHookError;
var HooksDispatcherOnMount = {
  readContext: readContext,
  useCallback: function (callback, deps) {
    mountWorkInProgressHook().memoizedState = [
      callback,
      void 0 === deps ? null : deps
    ];
    return callback;
  },
  useContext: readContext,
  useEffect: mountEffect,
  useImperativeHandle: function (ref, create, deps) {
    deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
    mountEffectImpl(
      4194308,
      4,
      imperativeHandleEffect.bind(null, create, ref),
      deps
    );
  },
  useLayoutEffect: function (create, deps) {
    return mountEffectImpl(4194308, 4, create, deps);
  },
  useInsertionEffect: function (create, deps) {
    mountEffectImpl(4, 2, create, deps);
  },
  useMemo: function (nextCreate, deps) {
    var hook = mountWorkInProgressHook();
    deps = void 0 === deps ? null : deps;
    shouldDoubleInvokeUserFnsInHooksDEV && nextCreate();
    nextCreate = nextCreate();
    hook.memoizedState = [nextCreate, deps];
    return nextCreate;
  },
  useReducer: function (reducer, initialArg, init) {
    var hook = mountWorkInProgressHook();
    initialArg = void 0 !== init ? init(initialArg) : initialArg;
    hook.memoizedState = hook.baseState = initialArg;
    reducer = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: reducer,
      lastRenderedState: initialArg
    };
    hook.queue = reducer;
    reducer = reducer.dispatch = dispatchReducerAction.bind(
      null,
      currentlyRenderingFiber$1,
      reducer
    );
    return [hook.memoizedState, reducer];
  },
  useRef: function (initialValue) {
    var hook = mountWorkInProgressHook();
    initialValue = { current: initialValue };
    return (hook.memoizedState = initialValue);
  },
  useState: mountState,
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value) {
    return (mountWorkInProgressHook().memoizedState = value);
  },
  useTransition: function () {
    var _mountState = mountState(!1),
      isPending = _mountState[0];
    _mountState = startTransition.bind(null, _mountState[1]);
    mountWorkInProgressHook().memoizedState = _mountState;
    return [isPending, _mountState];
  },
  useMutableSource: function () {},
  useSyncExternalStore: function (subscribe, getSnapshot) {
    var fiber = currentlyRenderingFiber$1,
      hook = mountWorkInProgressHook();
    var nextSnapshot = getSnapshot();
    var root = workInProgressRoot;
    if (null === root)
      throw Error(
        "Expected a work-in-progress root. This is a bug in React. Please file an issue."
      );
    includesBlockingLane(root, renderLanes$1) ||
      pushStoreConsistencyCheck(fiber, getSnapshot, nextSnapshot);
    hook.memoizedState = nextSnapshot;
    root = { value: nextSnapshot, getSnapshot: getSnapshot };
    hook.queue = root;
    mountEffect(subscribeToStore.bind(null, fiber, root, subscribe), [
      subscribe
    ]);
    fiber.flags |= 2048;
    pushEffect(
      9,
      updateStoreInstance.bind(null, fiber, root, nextSnapshot, getSnapshot),
      void 0,
      null
    );
    return nextSnapshot;
  },
  useId: function () {
    var hook = mountWorkInProgressHook(),
      identifierPrefix = workInProgressRoot.identifierPrefix,
      globalClientId = globalClientIdCounter++;
    identifierPrefix =
      ":" + identifierPrefix + "r" + globalClientId.toString(32) + ":";
    return (hook.memoizedState = identifierPrefix);
  },
  useCacheRefresh: function () {
    return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
      null,
      currentlyRenderingFiber$1
    ));
  }
};
HooksDispatcherOnMount.use = use;
var HooksDispatcherOnUpdate = {
  readContext: readContext,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: updateReducer,
  useRef: updateRef,
  useState: function () {
    return updateReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value) {
    var hook = updateWorkInProgressHook();
    return updateDeferredValueImpl(hook, currentHook.memoizedState, value);
  },
  useTransition: function () {
    var isPending = updateReducer(basicStateReducer)[0],
      start = updateWorkInProgressHook().memoizedState;
    return [isPending, start];
  },
  useMutableSource: updateMutableSource,
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId
};
HooksDispatcherOnUpdate.useCacheRefresh = updateRefresh;
HooksDispatcherOnUpdate.use = use;
var HooksDispatcherOnRerender = {
  readContext: readContext,
  useCallback: updateCallback,
  useContext: readContext,
  useEffect: updateEffect,
  useImperativeHandle: updateImperativeHandle,
  useInsertionEffect: updateInsertionEffect,
  useLayoutEffect: updateLayoutEffect,
  useMemo: updateMemo,
  useReducer: rerenderReducer,
  useRef: updateRef,
  useState: function () {
    return rerenderReducer(basicStateReducer);
  },
  useDebugValue: mountDebugValue,
  useDeferredValue: function (value) {
    var hook = updateWorkInProgressHook();
    return null === currentHook
      ? (hook.memoizedState = value)
      : updateDeferredValueImpl(hook, currentHook.memoizedState, value);
  },
  useTransition: function () {
    var isPending = rerenderReducer(basicStateReducer)[0],
      start = updateWorkInProgressHook().memoizedState;
    return [isPending, start];
  },
  useMutableSource: updateMutableSource,
  useSyncExternalStore: updateSyncExternalStore,
  useId: updateId
};
HooksDispatcherOnRerender.useCacheRefresh = updateRefresh;
HooksDispatcherOnRerender.use = use;
var now = Scheduler$1.unstable_now,
  commitTime = 0,
  layoutEffectStartTime = -1,
  profilerStartTime = -1,
  passiveEffectStartTime = -1,
  currentUpdateIsNested = !1,
  nestedUpdateScheduled = !1;
function startProfilerTimer(fiber) {
  profilerStartTime = now();
  0 > fiber.actualStartTime && (fiber.actualStartTime = now());
}
function stopProfilerTimerIfRunningAndRecordDelta(fiber, overrideBaseTime) {
  if (0 <= profilerStartTime) {
    var elapsedTime = now() - profilerStartTime;
    fiber.actualDuration += elapsedTime;
    overrideBaseTime && (fiber.selfBaseDuration = elapsedTime);
    profilerStartTime = -1;
  }
}
function recordLayoutEffectDuration(fiber) {
  if (0 <= layoutEffectStartTime) {
    var elapsedTime = now() - layoutEffectStartTime;
    layoutEffectStartTime = -1;
    for (fiber = fiber.return; null !== fiber; ) {
      switch (fiber.tag) {
        case 3:
          fiber.stateNode.effectDuration += elapsedTime;
          return;
        case 12:
          fiber.stateNode.effectDuration += elapsedTime;
          return;
      }
      fiber = fiber.return;
    }
  }
}
function recordPassiveEffectDuration(fiber) {
  if (0 <= passiveEffectStartTime) {
    var elapsedTime = now() - passiveEffectStartTime;
    passiveEffectStartTime = -1;
    for (fiber = fiber.return; null !== fiber; ) {
      switch (fiber.tag) {
        case 3:
          fiber = fiber.stateNode;
          null !== fiber && (fiber.passiveEffectDuration += elapsedTime);
          return;
        case 12:
          fiber = fiber.stateNode;
          null !== fiber && (fiber.passiveEffectDuration += elapsedTime);
          return;
      }
      fiber = fiber.return;
    }
  }
}
function startLayoutEffectTimer() {
  layoutEffectStartTime = now();
}
function transferActualDuration(fiber) {
  for (var child = fiber.child; child; )
    (fiber.actualDuration += child.actualDuration), (child = child.sibling);
}
function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    baseProps = assign({}, baseProps);
    Component = Component.defaultProps;
    for (var propName in Component)
      void 0 === baseProps[propName] &&
        (baseProps[propName] = Component[propName]);
    return baseProps;
  }
  return baseProps;
}
function applyDerivedStateFromProps(
  workInProgress,
  ctor,
  getDerivedStateFromProps,
  nextProps
) {
  ctor = workInProgress.memoizedState;
  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
  getDerivedStateFromProps =
    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
      ? ctor
      : assign({}, ctor, getDerivedStateFromProps);
  workInProgress.memoizedState = getDerivedStateFromProps;
  0 === workInProgress.lanes &&
    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
}
var classComponentUpdater = {
  isMounted: function (component) {
    return (component = component._reactInternals)
      ? getNearestMountedFiber(component) === component
      : !1;
  },
  enqueueSetState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var eventTime = requestEventTime(),
      lane = requestUpdateLane(inst),
      update = createUpdate(eventTime, lane);
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane, eventTime),
      entangleTransitions(payload, inst, lane));
  },
  enqueueReplaceState: function (inst, payload, callback) {
    inst = inst._reactInternals;
    var eventTime = requestEventTime(),
      lane = requestUpdateLane(inst),
      update = createUpdate(eventTime, lane);
    update.tag = 1;
    update.payload = payload;
    void 0 !== callback && null !== callback && (update.callback = callback);
    payload = enqueueUpdate(inst, update, lane);
    null !== payload &&
      (scheduleUpdateOnFiber(payload, inst, lane, eventTime),
      entangleTransitions(payload, inst, lane));
  },
  enqueueForceUpdate: function (inst, callback) {
    inst = inst._reactInternals;
    var eventTime = requestEventTime(),
      lane = requestUpdateLane(inst),
      update = createUpdate(eventTime, lane);
    update.tag = 2;
    void 0 !== callback && null !== callback && (update.callback = callback);
    callback = enqueueUpdate(inst, update, lane);
    null !== callback &&
      (scheduleUpdateOnFiber(callback, inst, lane, eventTime),
      entangleTransitions(callback, inst, lane));
  }
};
function checkShouldComponentUpdate(
  workInProgress,
  ctor,
  oldProps,
  newProps,
  oldState,
  newState,
  nextContext
) {
  workInProgress = workInProgress.stateNode;
  return "function" === typeof workInProgress.shouldComponentUpdate
    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
    : ctor.prototype && ctor.prototype.isPureReactComponent
    ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
    : !0;
}
function constructClassInstance(workInProgress, ctor, props) {
  var isLegacyContextConsumer = !1,
    unmaskedContext = emptyContextObject;
  var context = ctor.contextType;
  "object" === typeof context && null !== context
    ? (context = readContext(context))
    : ((unmaskedContext = isContextProvider(ctor)
        ? previousContext
        : contextStackCursor$1.current),
      (isLegacyContextConsumer = ctor.contextTypes),
      (context = (isLegacyContextConsumer =
        null !== isLegacyContextConsumer && void 0 !== isLegacyContextConsumer)
        ? getMaskedContext(workInProgress, unmaskedContext)
        : emptyContextObject));
  ctor = new ctor(props, context);
  workInProgress.memoizedState =
    null !== ctor.state && void 0 !== ctor.state ? ctor.state : null;
  ctor.updater = classComponentUpdater;
  workInProgress.stateNode = ctor;
  ctor._reactInternals = workInProgress;
  isLegacyContextConsumer &&
    ((workInProgress = workInProgress.stateNode),
    (workInProgress.__reactInternalMemoizedUnmaskedChildContext =
      unmaskedContext),
    (workInProgress.__reactInternalMemoizedMaskedChildContext = context));
  return ctor;
}
function callComponentWillReceiveProps(
  workInProgress,
  instance,
  newProps,
  nextContext
) {
  workInProgress = instance.state;
  "function" === typeof instance.componentWillReceiveProps &&
    instance.componentWillReceiveProps(newProps, nextContext);
  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
  instance.state !== workInProgress &&
    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
}
function mountClassInstance(workInProgress, ctor, newProps, renderLanes) {
  var instance = workInProgress.stateNode;
  instance.props = newProps;
  instance.state = workInProgress.memoizedState;
  instance.refs = {};
  initializeUpdateQueue(workInProgress);
  var contextType = ctor.contextType;
  "object" === typeof contextType && null !== contextType
    ? (instance.context = readContext(contextType))
    : ((contextType = isContextProvider(ctor)
        ? previousContext
        : contextStackCursor$1.current),
      (instance.context = getMaskedContext(workInProgress, contextType)));
  instance.state = workInProgress.memoizedState;
  contextType = ctor.getDerivedStateFromProps;
  "function" === typeof contextType &&
    (applyDerivedStateFromProps(workInProgress, ctor, contextType, newProps),
    (instance.state = workInProgress.memoizedState));
  "function" === typeof ctor.getDerivedStateFromProps ||
    "function" === typeof instance.getSnapshotBeforeUpdate ||
    ("function" !== typeof instance.UNSAFE_componentWillMount &&
      "function" !== typeof instance.componentWillMount) ||
    ((ctor = instance.state),
    "function" === typeof instance.componentWillMount &&
      instance.componentWillMount(),
    "function" === typeof instance.UNSAFE_componentWillMount &&
      instance.UNSAFE_componentWillMount(),
    ctor !== instance.state &&
      classComponentUpdater.enqueueReplaceState(instance, instance.state, null),
    processUpdateQueue(workInProgress, newProps, instance, renderLanes),
    (instance.state = workInProgress.memoizedState));
  "function" === typeof instance.componentDidMount &&
    (workInProgress.flags |= 4194308);
}
function createCapturedValueAtFiber(value, source) {
  try {
    var info = "",
      node = source;
    do (info += describeFiber(node)), (node = node.return);
    while (node);
    var JSCompiler_inline_result = info;
  } catch (x) {
    JSCompiler_inline_result =
      "\nError generating stack: " + x.message + "\n" + x.stack;
  }
  return {
    value: value,
    source: source,
    stack: JSCompiler_inline_result,
    digest: null
  };
}
function logCapturedError(boundary, errorInfo) {
  try {
    console.error(errorInfo.value);
  } catch (e) {
    setTimeout(function () {
      throw e;
    });
  }
}
function createRootErrorUpdate(fiber, errorInfo, lane) {
  lane = createUpdate(-1, lane);
  lane.tag = 3;
  lane.payload = { element: null };
  var error = errorInfo.value;
  lane.callback = function () {
    hasUncaughtError || ((hasUncaughtError = !0), (firstUncaughtError = error));
    logCapturedError(fiber, errorInfo);
  };
  return lane;
}
function createClassErrorUpdate(fiber, errorInfo, lane) {
  lane = createUpdate(-1, lane);
  lane.tag = 3;
  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
  if ("function" === typeof getDerivedStateFromError) {
    var error = errorInfo.value;
    lane.payload = function () {
      return getDerivedStateFromError(error);
    };
    lane.callback = function () {
      logCapturedError(fiber, errorInfo);
    };
  }
  var inst = fiber.stateNode;
  null !== inst &&
    "function" === typeof inst.componentDidCatch &&
    (lane.callback = function () {
      logCapturedError(fiber, errorInfo);
      "function" !== typeof getDerivedStateFromError &&
        (null === legacyErrorBoundariesThatAlreadyFailed
          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
          : legacyErrorBoundariesThatAlreadyFailed.add(this));
      var stack = errorInfo.stack;
      this.componentDidCatch(errorInfo.value, {
        componentStack: null !== stack ? stack : ""
      });
    });
  return lane;
}
var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner,
  SelectiveHydrationException = Error(
    "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
  ),
  didReceiveUpdate = !1;
function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
  workInProgress.child =
    null === current
      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
      : reconcileChildFibers(
          workInProgress,
          current.child,
          nextChildren,
          renderLanes
        );
}
function updateForwardRef(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  Component = Component.render;
  var ref = workInProgress.ref;
  prepareToReadContext(workInProgress, renderLanes);
  nextProps = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    ref,
    renderLanes
  );
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null === current) {
    var type = Component.type;
    if (
      "function" === typeof type &&
      !shouldConstruct(type) &&
      void 0 === type.defaultProps &&
      null === Component.compare &&
      void 0 === Component.defaultProps
    )
      return (
        (workInProgress.tag = 15),
        (workInProgress.type = type),
        updateSimpleMemoComponent(
          current,
          workInProgress,
          type,
          nextProps,
          renderLanes
        )
      );
    current = createFiberFromTypeAndProps(
      Component.type,
      null,
      nextProps,
      workInProgress,
      workInProgress.mode,
      renderLanes
    );
    current.ref = workInProgress.ref;
    current.return = workInProgress;
    return (workInProgress.child = current);
  }
  type = current.child;
  if (0 === (current.lanes & renderLanes)) {
    var prevProps = type.memoizedProps;
    Component = Component.compare;
    Component = null !== Component ? Component : shallowEqual;
    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
  }
  workInProgress.flags |= 1;
  current = createWorkInProgress(type, nextProps);
  current.ref = workInProgress.ref;
  current.return = workInProgress;
  return (workInProgress.child = current);
}
function updateSimpleMemoComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (null !== current) {
    var prevProps = current.memoizedProps;
    if (
      shallowEqual(prevProps, nextProps) &&
      current.ref === workInProgress.ref
    )
      if (
        ((didReceiveUpdate = !1),
        (workInProgress.pendingProps = nextProps = prevProps),
        0 !== (current.lanes & renderLanes))
      )
        0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
      else
        return (
          (workInProgress.lanes = current.lanes),
          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
        );
  }
  return updateFunctionComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    renderLanes
  );
}
function updateOffscreenComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    nextChildren = nextProps.children,
    nextIsDetached = 0 !== (workInProgress.stateNode._pendingVisibility & 2),
    prevState = null !== current ? current.memoizedState : null;
  markRef$1(current, workInProgress);
  if ("hidden" === nextProps.mode || nextIsDetached) {
    if (0 !== (workInProgress.flags & 128)) {
      renderLanes =
        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
      if (null !== current) {
        nextProps = workInProgress.child = current.child;
        for (nextChildren = 0; null !== nextProps; )
          (nextChildren =
            nextChildren | nextProps.lanes | nextProps.childLanes),
            (nextProps = nextProps.sibling);
        workInProgress.childLanes = nextChildren & ~renderLanes;
      } else (workInProgress.childLanes = 0), (workInProgress.child = null);
      return deferHiddenOffscreenComponent(
        current,
        workInProgress,
        renderLanes
      );
    }
    if (0 === (workInProgress.mode & 1))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== current && pushTransition(workInProgress, null),
        reuseHiddenContextOnStack(),
        pushOffscreenSuspenseHandler(workInProgress);
    else if (0 !== (renderLanes & 1073741824))
      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
        null !== current &&
          pushTransition(
            workInProgress,
            null !== prevState ? prevState.cachePool : null
          ),
        null !== prevState
          ? pushHiddenContext(workInProgress, prevState)
          : reuseHiddenContextOnStack(),
        pushOffscreenSuspenseHandler(workInProgress);
    else
      return (
        (workInProgress.lanes = workInProgress.childLanes = 1073741824),
        deferHiddenOffscreenComponent(
          current,
          workInProgress,
          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes
        )
      );
  } else
    null !== prevState
      ? (pushTransition(workInProgress, prevState.cachePool),
        pushHiddenContext(workInProgress, prevState),
        reuseSuspenseHandlerOnStack(),
        (workInProgress.memoizedState = null))
      : (null !== current && pushTransition(workInProgress, null),
        reuseHiddenContextOnStack(),
        reuseSuspenseHandlerOnStack());
  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  return workInProgress.child;
}
function deferHiddenOffscreenComponent(current, workInProgress, nextBaseLanes) {
  var JSCompiler_inline_result = peekCacheFromPool();
  JSCompiler_inline_result =
    null === JSCompiler_inline_result
      ? null
      : { parent: CacheContext._currentValue2, pool: JSCompiler_inline_result };
  workInProgress.memoizedState = {
    baseLanes: nextBaseLanes,
    cachePool: JSCompiler_inline_result
  };
  null !== current && pushTransition(workInProgress, null);
  reuseHiddenContextOnStack();
  pushOffscreenSuspenseHandler(workInProgress);
  return null;
}
function markRef$1(current, workInProgress) {
  var ref = workInProgress.ref;
  if (
    (null === current && null !== ref) ||
    (null !== current && current.ref !== ref)
  )
    (workInProgress.flags |= 512), (workInProgress.flags |= 2097152);
}
function updateFunctionComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  var context = isContextProvider(Component)
    ? previousContext
    : contextStackCursor$1.current;
  context = getMaskedContext(workInProgress, context);
  prepareToReadContext(workInProgress, renderLanes);
  Component = renderWithHooks(
    current,
    workInProgress,
    Component,
    nextProps,
    context,
    renderLanes
  );
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, Component, renderLanes);
  return workInProgress.child;
}
function replayFunctionComponent(
  current,
  workInProgress,
  nextProps,
  Component,
  renderLanes
) {
  var context = isContextProvider(Component)
    ? previousContext
    : contextStackCursor$1.current;
  context = getMaskedContext(workInProgress, context);
  prepareToReadContext(workInProgress, renderLanes);
  nextProps = renderWithHooksAgain(
    workInProgress,
    Component,
    nextProps,
    context
  );
  finishRenderingHooks();
  if (null !== current && !didReceiveUpdate)
    return (
      bailoutHooks(current, workInProgress, renderLanes),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  workInProgress.flags |= 1;
  reconcileChildren(current, workInProgress, nextProps, renderLanes);
  return workInProgress.child;
}
function updateClassComponent(
  current,
  workInProgress,
  Component,
  nextProps,
  renderLanes
) {
  if (isContextProvider(Component)) {
    var hasContext = !0;
    pushContextProvider(workInProgress);
  } else hasContext = !1;
  prepareToReadContext(workInProgress, renderLanes);
  if (null === workInProgress.stateNode)
    resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress),
      constructClassInstance(workInProgress, Component, nextProps),
      mountClassInstance(workInProgress, Component, nextProps, renderLanes),
      (nextProps = !0);
  else if (null === current) {
    var instance = workInProgress.stateNode,
      oldProps = workInProgress.memoizedProps;
    instance.props = oldProps;
    var oldContext = instance.context,
      contextType = Component.contextType;
    "object" === typeof contextType && null !== contextType
      ? (contextType = readContext(contextType))
      : ((contextType = isContextProvider(Component)
          ? previousContext
          : contextStackCursor$1.current),
        (contextType = getMaskedContext(workInProgress, contextType)));
    var getDerivedStateFromProps = Component.getDerivedStateFromProps,
      hasNewLifecycles =
        "function" === typeof getDerivedStateFromProps ||
        "function" === typeof instance.getSnapshotBeforeUpdate;
    hasNewLifecycles ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((oldProps !== nextProps || oldContext !== contextType) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          contextType
        ));
    hasForceUpdate = !1;
    var oldState = workInProgress.memoizedState;
    instance.state = oldState;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    oldContext = workInProgress.memoizedState;
    oldProps !== nextProps ||
    oldState !== oldContext ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate
      ? ("function" === typeof getDerivedStateFromProps &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps,
            nextProps
          ),
          (oldContext = workInProgress.memoizedState)),
        (oldProps =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            oldProps,
            nextProps,
            oldState,
            oldContext,
            contextType
          ))
          ? (hasNewLifecycles ||
              ("function" !== typeof instance.UNSAFE_componentWillMount &&
                "function" !== typeof instance.componentWillMount) ||
              ("function" === typeof instance.componentWillMount &&
                instance.componentWillMount(),
              "function" === typeof instance.UNSAFE_componentWillMount &&
                instance.UNSAFE_componentWillMount()),
            "function" === typeof instance.componentDidMount &&
              (workInProgress.flags |= 4194308))
          : ("function" === typeof instance.componentDidMount &&
              (workInProgress.flags |= 4194308),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = oldContext)),
        (instance.props = nextProps),
        (instance.state = oldContext),
        (instance.context = contextType),
        (nextProps = oldProps))
      : ("function" === typeof instance.componentDidMount &&
          (workInProgress.flags |= 4194308),
        (nextProps = !1));
  } else {
    instance = workInProgress.stateNode;
    cloneUpdateQueue(current, workInProgress);
    oldProps = workInProgress.memoizedProps;
    contextType =
      workInProgress.type === workInProgress.elementType
        ? oldProps
        : resolveDefaultProps(workInProgress.type, oldProps);
    instance.props = contextType;
    hasNewLifecycles = workInProgress.pendingProps;
    oldState = instance.context;
    oldContext = Component.contextType;
    "object" === typeof oldContext && null !== oldContext
      ? (oldContext = readContext(oldContext))
      : ((oldContext = isContextProvider(Component)
          ? previousContext
          : contextStackCursor$1.current),
        (oldContext = getMaskedContext(workInProgress, oldContext)));
    var getDerivedStateFromProps$jscomp$0 = Component.getDerivedStateFromProps;
    (getDerivedStateFromProps =
      "function" === typeof getDerivedStateFromProps$jscomp$0 ||
      "function" === typeof instance.getSnapshotBeforeUpdate) ||
      ("function" !== typeof instance.UNSAFE_componentWillReceiveProps &&
        "function" !== typeof instance.componentWillReceiveProps) ||
      ((oldProps !== hasNewLifecycles || oldState !== oldContext) &&
        callComponentWillReceiveProps(
          workInProgress,
          instance,
          nextProps,
          oldContext
        ));
    hasForceUpdate = !1;
    oldState = workInProgress.memoizedState;
    instance.state = oldState;
    processUpdateQueue(workInProgress, nextProps, instance, renderLanes);
    var newState = workInProgress.memoizedState;
    oldProps !== hasNewLifecycles ||
    oldState !== newState ||
    didPerformWorkStackCursor.current ||
    hasForceUpdate
      ? ("function" === typeof getDerivedStateFromProps$jscomp$0 &&
          (applyDerivedStateFromProps(
            workInProgress,
            Component,
            getDerivedStateFromProps$jscomp$0,
            nextProps
          ),
          (newState = workInProgress.memoizedState)),
        (contextType =
          hasForceUpdate ||
          checkShouldComponentUpdate(
            workInProgress,
            Component,
            contextType,
            nextProps,
            oldState,
            newState,
            oldContext
          ) ||
          !1)
          ? (getDerivedStateFromProps ||
              ("function" !== typeof instance.UNSAFE_componentWillUpdate &&
                "function" !== typeof instance.componentWillUpdate) ||
              ("function" === typeof instance.componentWillUpdate &&
                instance.componentWillUpdate(nextProps, newState, oldContext),
              "function" === typeof instance.UNSAFE_componentWillUpdate &&
                instance.UNSAFE_componentWillUpdate(
                  nextProps,
                  newState,
                  oldContext
                )),
            "function" === typeof instance.componentDidUpdate &&
              (workInProgress.flags |= 4),
            "function" === typeof instance.getSnapshotBeforeUpdate &&
              (workInProgress.flags |= 1024))
          : ("function" !== typeof instance.componentDidUpdate ||
              (oldProps === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 4),
            "function" !== typeof instance.getSnapshotBeforeUpdate ||
              (oldProps === current.memoizedProps &&
                oldState === current.memoizedState) ||
              (workInProgress.flags |= 1024),
            (workInProgress.memoizedProps = nextProps),
            (workInProgress.memoizedState = newState)),
        (instance.props = nextProps),
        (instance.state = newState),
        (instance.context = oldContext),
        (nextProps = contextType))
      : ("function" !== typeof instance.componentDidUpdate ||
          (oldProps === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 4),
        "function" !== typeof instance.getSnapshotBeforeUpdate ||
          (oldProps === current.memoizedProps &&
            oldState === current.memoizedState) ||
          (workInProgress.flags |= 1024),
        (nextProps = !1));
  }
  return finishClassComponent(
    current,
    workInProgress,
    Component,
    nextProps,
    hasContext,
    renderLanes
  );
}
function finishClassComponent(
  current,
  workInProgress,
  Component,
  shouldUpdate,
  hasContext,
  renderLanes
) {
  markRef$1(current, workInProgress);
  var didCaptureError = 0 !== (workInProgress.flags & 128);
  if (!shouldUpdate && !didCaptureError)
    return (
      hasContext && invalidateContextProvider(workInProgress, Component, !1),
      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
    );
  shouldUpdate = workInProgress.stateNode;
  ReactCurrentOwner$1.current = workInProgress;
  if (
    didCaptureError &&
    "function" !== typeof Component.getDerivedStateFromError
  ) {
    var nextChildren = null;
    profilerStartTime = -1;
  } else nextChildren = shouldUpdate.render();
  workInProgress.flags |= 1;
  null !== current && didCaptureError
    ? ((didCaptureError = nextChildren),
      (workInProgress.child = reconcileChildFibers(
        workInProgress,
        current.child,
        null,
        renderLanes
      )),
      (workInProgress.child = reconcileChildFibers(
        workInProgress,
        null,
        didCaptureError,
        renderLanes
      )))
    : reconcileChildren(current, workInProgress, nextChildren, renderLanes);
  workInProgress.memoizedState = shouldUpdate.state;
  hasContext && invalidateContextProvider(workInProgress, Component, !0);
  return workInProgress.child;
}
function pushHostRootContext(workInProgress) {
  var root = workInProgress.stateNode;
  root.pendingContext
    ? pushTopLevelContextObject(
        workInProgress,
        root.pendingContext,
        root.pendingContext !== root.context
      )
    : root.context &&
      pushTopLevelContextObject(workInProgress, root.context, !1);
  pushHostContainer(workInProgress, root.containerInfo);
}
var SUSPENDED_MARKER = { dehydrated: null, treeContext: null, retryLane: 0 };
function mountSuspenseOffscreenState(renderLanes) {
  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
}
function updateSuspenseComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    showFallback = !1,
    didSuspend = 0 !== (workInProgress.flags & 128),
    JSCompiler_temp;
  (JSCompiler_temp = didSuspend) ||
    (JSCompiler_temp =
      null !== current && null === current.memoizedState
        ? !1
        : 0 !== (suspenseStackCursor.current & 2));
  JSCompiler_temp && ((showFallback = !0), (workInProgress.flags &= -129));
  if (null === current) {
    didSuspend = nextProps.children;
    current = nextProps.fallback;
    if (showFallback)
      return (
        reuseSuspenseHandlerOnStack(),
        (nextProps = workInProgress.mode),
        (showFallback = workInProgress.child),
        (didSuspend = { mode: "hidden", children: didSuspend }),
        0 === (nextProps & 1) && null !== showFallback
          ? ((showFallback.childLanes = 0),
            (showFallback.pendingProps = didSuspend),
            workInProgress.mode & 2 &&
              ((showFallback.actualDuration = 0),
              (showFallback.actualStartTime = -1),
              (showFallback.selfBaseDuration = 0),
              (showFallback.treeBaseDuration = 0)))
          : (showFallback = createFiberFromOffscreen(
              didSuspend,
              nextProps,
              0,
              null
            )),
        (current = createFiberFromFragment(
          current,
          nextProps,
          renderLanes,
          null
        )),
        (showFallback.return = workInProgress),
        (current.return = workInProgress),
        (showFallback.sibling = current),
        (workInProgress.child = showFallback),
        (workInProgress.child.memoizedState =
          mountSuspenseOffscreenState(renderLanes)),
        (workInProgress.memoizedState = SUSPENDED_MARKER),
        current
      );
    pushPrimaryTreeSuspenseHandler(workInProgress);
    return mountSuspensePrimaryChildren(workInProgress, didSuspend);
  }
  JSCompiler_temp = current.memoizedState;
  if (null !== JSCompiler_temp) {
    var dehydrated = JSCompiler_temp.dehydrated;
    if (null !== dehydrated)
      return updateDehydratedSuspenseComponent(
        current,
        workInProgress,
        didSuspend,
        nextProps,
        dehydrated,
        JSCompiler_temp,
        renderLanes
      );
  }
  if (showFallback) {
    reuseSuspenseHandlerOnStack();
    showFallback = nextProps.fallback;
    didSuspend = workInProgress.mode;
    JSCompiler_temp = current.child;
    dehydrated = JSCompiler_temp.sibling;
    var primaryChildProps = { mode: "hidden", children: nextProps.children };
    0 === (didSuspend & 1) && workInProgress.child !== JSCompiler_temp
      ? ((nextProps = workInProgress.child),
        (nextProps.childLanes = 0),
        (nextProps.pendingProps = primaryChildProps),
        workInProgress.mode & 2 &&
          ((nextProps.actualDuration = 0),
          (nextProps.actualStartTime = -1),
          (nextProps.selfBaseDuration = JSCompiler_temp.selfBaseDuration),
          (nextProps.treeBaseDuration = JSCompiler_temp.treeBaseDuration)),
        (workInProgress.deletions = null))
      : ((nextProps = createWorkInProgress(JSCompiler_temp, primaryChildProps)),
        (nextProps.subtreeFlags = JSCompiler_temp.subtreeFlags & 14680064));
    null !== dehydrated
      ? (showFallback = createWorkInProgress(dehydrated, showFallback))
      : ((showFallback = createFiberFromFragment(
          showFallback,
          didSuspend,
          renderLanes,
          null
        )),
        (showFallback.flags |= 2));
    showFallback.return = workInProgress;
    nextProps.return = workInProgress;
    nextProps.sibling = showFallback;
    workInProgress.child = nextProps;
    nextProps = showFallback;
    showFallback = workInProgress.child;
    didSuspend = current.child.memoizedState;
    null === didSuspend
      ? (didSuspend = mountSuspenseOffscreenState(renderLanes))
      : ((JSCompiler_temp = didSuspend.cachePool),
        null !== JSCompiler_temp
          ? ((dehydrated = CacheContext._currentValue2),
            (JSCompiler_temp =
              JSCompiler_temp.parent !== dehydrated
                ? { parent: dehydrated, pool: dehydrated }
                : JSCompiler_temp))
          : (JSCompiler_temp = getSuspendedCache()),
        (didSuspend = {
          baseLanes: didSuspend.baseLanes | renderLanes,
          cachePool: JSCompiler_temp
        }));
    showFallback.memoizedState = didSuspend;
    showFallback.childLanes = current.childLanes & ~renderLanes;
    workInProgress.memoizedState = SUSPENDED_MARKER;
    return nextProps;
  }
  pushPrimaryTreeSuspenseHandler(workInProgress);
  showFallback = current.child;
  current = showFallback.sibling;
  nextProps = createWorkInProgress(showFallback, {
    mode: "visible",
    children: nextProps.children
  });
  0 === (workInProgress.mode & 1) && (nextProps.lanes = renderLanes);
  nextProps.return = workInProgress;
  nextProps.sibling = null;
  null !== current &&
    ((renderLanes = workInProgress.deletions),
    null === renderLanes
      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
      : renderLanes.push(current));
  workInProgress.child = nextProps;
  workInProgress.memoizedState = null;
  return nextProps;
}
function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
  primaryChildren = createFiberFromOffscreen(
    { mode: "visible", children: primaryChildren },
    workInProgress.mode,
    0,
    null
  );
  primaryChildren.return = workInProgress;
  return (workInProgress.child = primaryChildren);
}
function retrySuspenseComponentWithoutHydrating(
  current,
  workInProgress,
  renderLanes,
  recoverableError
) {
  null !== recoverableError &&
    (null === hydrationErrors
      ? (hydrationErrors = [recoverableError])
      : hydrationErrors.push(recoverableError));
  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
  current = mountSuspensePrimaryChildren(
    workInProgress,
    workInProgress.pendingProps.children
  );
  current.flags |= 2;
  workInProgress.memoizedState = null;
  return current;
}
function updateDehydratedSuspenseComponent(
  current,
  workInProgress,
  didSuspend,
  nextProps,
  suspenseInstance,
  suspenseState,
  renderLanes
) {
  if (didSuspend) {
    if (workInProgress.flags & 256)
      return (
        pushPrimaryTreeSuspenseHandler(workInProgress),
        (workInProgress.flags &= -257),
        retrySuspenseComponentWithoutHydrating(
          current,
          workInProgress,
          renderLanes,
          {
            value: Error(
              "There was an error while hydrating this Suspense boundary. Switched to client rendering."
            ),
            source: null,
            stack: null,
            digest: null
          }
        )
      );
    if (null !== workInProgress.memoizedState)
      return (
        reuseSuspenseHandlerOnStack(),
        (workInProgress.child = current.child),
        (workInProgress.flags |= 128),
        null
      );
    reuseSuspenseHandlerOnStack();
    suspenseState = nextProps.fallback;
    didSuspend = workInProgress.mode;
    nextProps = createFiberFromOffscreen(
      { mode: "visible", children: nextProps.children },
      didSuspend,
      0,
      null
    );
    suspenseState = createFiberFromFragment(
      suspenseState,
      didSuspend,
      renderLanes,
      null
    );
    suspenseState.flags |= 2;
    nextProps.return = workInProgress;
    suspenseState.return = workInProgress;
    nextProps.sibling = suspenseState;
    workInProgress.child = nextProps;
    0 !== (workInProgress.mode & 1) &&
      reconcileChildFibers(workInProgress, current.child, null, renderLanes);
    workInProgress.child.memoizedState =
      mountSuspenseOffscreenState(renderLanes);
    workInProgress.memoizedState = SUSPENDED_MARKER;
    return suspenseState;
  }
  pushPrimaryTreeSuspenseHandler(workInProgress);
  if (0 === (workInProgress.mode & 1))
    return retrySuspenseComponentWithoutHydrating(
      current,
      workInProgress,
      renderLanes,
      null
    );
  if (shim())
    return (
      (suspenseState = shim().digest),
      (nextProps = Error(
        "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."
      )),
      (nextProps.digest = suspenseState),
      retrySuspenseComponentWithoutHydrating(
        current,
        workInProgress,
        renderLanes,
        {
          value: nextProps,
          source: null,
          stack: null,
          digest: null != suspenseState ? suspenseState : null
        }
      )
    );
  didSuspend = 0 !== (renderLanes & current.childLanes);
  if (didReceiveUpdate || didSuspend) {
    nextProps = workInProgressRoot;
    if (null !== nextProps) {
      switch (renderLanes & -renderLanes) {
        case 2:
          didSuspend = 1;
          break;
        case 8:
          didSuspend = 4;
          break;
        case 32:
          didSuspend = 16;
          break;
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          didSuspend = 64;
          break;
        case 536870912:
          didSuspend = 268435456;
          break;
        default:
          didSuspend = 0;
      }
      didSuspend =
        0 !== (didSuspend & (nextProps.suspendedLanes | renderLanes))
          ? 0
          : didSuspend;
      if (0 !== didSuspend && didSuspend !== suspenseState.retryLane)
        throw (
          ((suspenseState.retryLane = didSuspend),
          enqueueConcurrentRenderForLane(current, didSuspend),
          scheduleUpdateOnFiber(nextProps, current, didSuspend, -1),
          SelectiveHydrationException)
        );
    }
    renderDidSuspendDelayIfPossible();
    return retrySuspenseComponentWithoutHydrating(
      current,
      workInProgress,
      renderLanes,
      null
    );
  }
  if (shim())
    return (
      (workInProgress.flags |= 128),
      (workInProgress.child = current.child),
      retryDehydratedSuspenseBoundary.bind(null, current),
      shim(),
      null
    );
  current = mountSuspensePrimaryChildren(workInProgress, nextProps.children);
  current.flags |= 4096;
  return current;
}
function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
  fiber.lanes |= renderLanes;
  var alternate = fiber.alternate;
  null !== alternate && (alternate.lanes |= renderLanes);
  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
}
function initSuspenseListRenderState(
  workInProgress,
  isBackwards,
  tail,
  lastContentRow,
  tailMode
) {
  var renderState = workInProgress.memoizedState;
  null === renderState
    ? (workInProgress.memoizedState = {
        isBackwards: isBackwards,
        rendering: null,
        renderingStartTime: 0,
        last: lastContentRow,
        tail: tail,
        tailMode: tailMode
      })
    : ((renderState.isBackwards = isBackwards),
      (renderState.rendering = null),
      (renderState.renderingStartTime = 0),
      (renderState.last = lastContentRow),
      (renderState.tail = tail),
      (renderState.tailMode = tailMode));
}
function updateSuspenseListComponent(current, workInProgress, renderLanes) {
  var nextProps = workInProgress.pendingProps,
    revealOrder = nextProps.revealOrder,
    tailMode = nextProps.tail;
  reconcileChildren(current, workInProgress, nextProps.children, renderLanes);
  nextProps = suspenseStackCursor.current;
  if (0 !== (nextProps & 2))
    (nextProps = (nextProps & 1) | 2), (workInProgress.flags |= 128);
  else {
    if (null !== current && 0 !== (current.flags & 128))
      a: for (current = workInProgress.child; null !== current; ) {
        if (13 === current.tag)
          null !== current.memoizedState &&
            scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (19 === current.tag)
          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
        else if (null !== current.child) {
          current.child.return = current;
          current = current.child;
          continue;
        }
        if (current === workInProgress) break a;
        for (; null === current.sibling; ) {
          if (null === current.return || current.return === workInProgress)
            break a;
          current = current.return;
        }
        current.sibling.return = current.return;
        current = current.sibling;
      }
    nextProps &= 1;
  }
  push(suspenseStackCursor, nextProps);
  if (0 === (workInProgress.mode & 1)) workInProgress.memoizedState = null;
  else
    switch (revealOrder) {
      case "forwards":
        renderLanes = workInProgress.child;
        for (revealOrder = null; null !== renderLanes; )
          (current = renderLanes.alternate),
            null !== current &&
              null === findFirstSuspended(current) &&
              (revealOrder = renderLanes),
            (renderLanes = renderLanes.sibling);
        renderLanes = revealOrder;
        null === renderLanes
          ? ((revealOrder = workInProgress.child),
            (workInProgress.child = null))
          : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
        initSuspenseListRenderState(
          workInProgress,
          !1,
          revealOrder,
          renderLanes,
          tailMode
        );
        break;
      case "backwards":
        renderLanes = null;
        revealOrder = workInProgress.child;
        for (workInProgress.child = null; null !== revealOrder; ) {
          current = revealOrder.alternate;
          if (null !== current && null === findFirstSuspended(current)) {
            workInProgress.child = revealOrder;
            break;
          }
          current = revealOrder.sibling;
          revealOrder.sibling = renderLanes;
          renderLanes = revealOrder;
          revealOrder = current;
        }
        initSuspenseListRenderState(
          workInProgress,
          !0,
          renderLanes,
          null,
          tailMode
        );
        break;
      case "together":
        initSuspenseListRenderState(workInProgress, !1, null, null, void 0);
        break;
      default:
        workInProgress.memoizedState = null;
    }
  return workInProgress.child;
}
function resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress) {
  0 === (workInProgress.mode & 1) &&
    null !== current &&
    ((current.alternate = null),
    (workInProgress.alternate = null),
    (workInProgress.flags |= 2));
}
function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
  null !== current && (workInProgress.dependencies = current.dependencies);
  profilerStartTime = -1;
  workInProgressRootSkippedLanes |= workInProgress.lanes;
  if (0 === (renderLanes & workInProgress.childLanes)) return null;
  if (null !== current && workInProgress.child !== current.child)
    throw Error("Resuming work not yet implemented.");
  if (null !== workInProgress.child) {
    current = workInProgress.child;
    renderLanes = createWorkInProgress(current, current.pendingProps);
    workInProgress.child = renderLanes;
    for (renderLanes.return = workInProgress; null !== current.sibling; )
      (current = current.sibling),
        (renderLanes = renderLanes.sibling =
          createWorkInProgress(current, current.pendingProps)),
        (renderLanes.return = workInProgress);
    renderLanes.sibling = null;
  }
  return workInProgress.child;
}
function attemptEarlyBailoutIfNoScheduledUpdate(
  current,
  workInProgress,
  renderLanes
) {
  switch (workInProgress.tag) {
    case 3:
      pushHostRootContext(workInProgress);
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
      break;
    case 27:
    case 5:
      pushHostContext(workInProgress);
      break;
    case 1:
      isContextProvider(workInProgress.type) &&
        pushContextProvider(workInProgress);
      break;
    case 4:
      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
      break;
    case 10:
      pushProvider(
        workInProgress,
        workInProgress.type._context,
        workInProgress.memoizedProps.value
      );
      break;
    case 12:
      0 !== (renderLanes & workInProgress.childLanes) &&
        (workInProgress.flags |= 4);
      var stateNode = workInProgress.stateNode;
      stateNode.effectDuration = 0;
      stateNode.passiveEffectDuration = 0;
      break;
    case 13:
      stateNode = workInProgress.memoizedState;
      if (null !== stateNode) {
        if (null !== stateNode.dehydrated)
          return (
            pushPrimaryTreeSuspenseHandler(workInProgress),
            (workInProgress.flags |= 128),
            null
          );
        if (0 !== (renderLanes & workInProgress.child.childLanes))
          return updateSuspenseComponent(current, workInProgress, renderLanes);
        pushPrimaryTreeSuspenseHandler(workInProgress);
        current = bailoutOnAlreadyFinishedWork(
          current,
          workInProgress,
          renderLanes
        );
        return null !== current ? current.sibling : null;
      }
      pushPrimaryTreeSuspenseHandler(workInProgress);
      break;
    case 19:
      stateNode = 0 !== (renderLanes & workInProgress.childLanes);
      if (0 !== (current.flags & 128)) {
        if (stateNode)
          return updateSuspenseListComponent(
            current,
            workInProgress,
            renderLanes
          );
        workInProgress.flags |= 128;
      }
      var renderState = workInProgress.memoizedState;
      null !== renderState &&
        ((renderState.rendering = null),
        (renderState.tail = null),
        (renderState.lastEffect = null));
      push(suspenseStackCursor, suspenseStackCursor.current);
      if (stateNode) break;
      else return null;
    case 22:
    case 23:
      return (
        (workInProgress.lanes = 0),
        updateOffscreenComponent(current, workInProgress, renderLanes)
      );
    case 24:
      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
  }
  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
}
var valueCursor = createCursor(null),
  currentlyRenderingFiber = null,
  lastContextDependency = null,
  lastFullyObservedContext = null;
function resetContextDependencies() {
  lastFullyObservedContext =
    lastContextDependency =
    currentlyRenderingFiber =
      null;
}
function pushProvider(providerFiber, context, nextValue) {
  push(valueCursor, context._currentValue2);
  context._currentValue2 = nextValue;
}
function popProvider(context) {
  var currentValue = valueCursor.current;
  context._currentValue2 =
    currentValue === REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED
      ? context._defaultValue
      : currentValue;
  pop(valueCursor);
}
function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
  for (; null !== parent; ) {
    var alternate = parent.alternate;
    (parent.childLanes & renderLanes) !== renderLanes
      ? ((parent.childLanes |= renderLanes),
        null !== alternate && (alternate.childLanes |= renderLanes))
      : null !== alternate &&
        (alternate.childLanes & renderLanes) !== renderLanes &&
        (alternate.childLanes |= renderLanes);
    if (parent === propagationRoot) break;
    parent = parent.return;
  }
}
function propagateContextChange(workInProgress, context, renderLanes) {
  var fiber = workInProgress.child;
  null !== fiber && (fiber.return = workInProgress);
  for (; null !== fiber; ) {
    var list = fiber.dependencies;
    if (null !== list) {
      var nextFiber = fiber.child;
      for (var dependency = list.firstContext; null !== dependency; ) {
        if (dependency.context === context) {
          if (1 === fiber.tag) {
            dependency = createUpdate(-1, renderLanes & -renderLanes);
            dependency.tag = 2;
            var updateQueue = fiber.updateQueue;
            if (null !== updateQueue) {
              updateQueue = updateQueue.shared;
              var pending = updateQueue.pending;
              null === pending
                ? (dependency.next = dependency)
                : ((dependency.next = pending.next),
                  (pending.next = dependency));
              updateQueue.pending = dependency;
            }
          }
          fiber.lanes |= renderLanes;
          dependency = fiber.alternate;
          null !== dependency && (dependency.lanes |= renderLanes);
          scheduleContextWorkOnParentPath(
            fiber.return,
            renderLanes,
            workInProgress
          );
          list.lanes |= renderLanes;
          break;
        }
        dependency = dependency.next;
      }
    } else if (10 === fiber.tag)
      nextFiber = fiber.type === workInProgress.type ? null : fiber.child;
    else if (18 === fiber.tag) {
      nextFiber = fiber.return;
      if (null === nextFiber)
        throw Error(
          "We just came from a parent so we must have had a parent. This is a bug in React."
        );
      nextFiber.lanes |= renderLanes;
      list = nextFiber.alternate;
      null !== list && (list.lanes |= renderLanes);
      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
      nextFiber = fiber.sibling;
    } else nextFiber = fiber.child;
    if (null !== nextFiber) nextFiber.return = fiber;
    else
      for (nextFiber = fiber; null !== nextFiber; ) {
        if (nextFiber === workInProgress) {
          nextFiber = null;
          break;
        }
        fiber = nextFiber.sibling;
        if (null !== fiber) {
          fiber.return = nextFiber.return;
          nextFiber = fiber;
          break;
        }
        nextFiber = nextFiber.return;
      }
    fiber = nextFiber;
  }
}
function prepareToReadContext(workInProgress, renderLanes) {
  currentlyRenderingFiber = workInProgress;
  lastFullyObservedContext = lastContextDependency = null;
  workInProgress = workInProgress.dependencies;
  null !== workInProgress &&
    null !== workInProgress.firstContext &&
    (0 !== (workInProgress.lanes & renderLanes) && (didReceiveUpdate = !0),
    (workInProgress.firstContext = null));
}
function readContext(context) {
  var value = context._currentValue2;
  if (lastFullyObservedContext !== context)
    if (
      ((context = { context: context, memoizedValue: value, next: null }),
      null === lastContextDependency)
    ) {
      if (null === currentlyRenderingFiber)
        throw Error(
          "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
        );
      lastContextDependency = context;
      currentlyRenderingFiber.dependencies = {
        lanes: 0,
        firstContext: context
      };
    } else lastContextDependency = lastContextDependency.next = context;
  return value;
}
var AbortControllerLocal =
    "undefined" !== typeof AbortController
      ? AbortController
      : function () {
          var listeners = [],
            signal = (this.signal = {
              aborted: !1,
              addEventListener: function (type, listener) {
                listeners.push(listener);
              }
            });
          this.abort = function () {
            signal.aborted = !0;
            listeners.forEach(function (listener) {
              return listener();
            });
          };
        },
  scheduleCallback$1 = Scheduler$1.unstable_scheduleCallback,
  NormalPriority = Scheduler$1.unstable_NormalPriority,
  CacheContext = {
    $$typeof: REACT_CONTEXT_TYPE,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
    _defaultValue: null,
    _globalName: null
  };
function createCache() {
  return {
    controller: new AbortControllerLocal(),
    data: new Map(),
    refCount: 0
  };
}
function releaseCache(cache) {
  cache.refCount--;
  0 === cache.refCount &&
    scheduleCallback$1(NormalPriority, function () {
      cache.controller.abort();
    });
}
var ReactCurrentBatchConfig$1 = ReactSharedInternals.ReactCurrentBatchConfig,
  resumedCache = createCursor(null);
function peekCacheFromPool() {
  var cacheResumedFromPreviousRender = resumedCache.current;
  return null !== cacheResumedFromPreviousRender
    ? cacheResumedFromPreviousRender
    : workInProgressRoot.pooledCache;
}
function pushTransition(offscreenWorkInProgress, prevCachePool) {
  null === prevCachePool
    ? push(resumedCache, resumedCache.current)
    : push(resumedCache, prevCachePool.pool);
}
function getSuspendedCache() {
  var cacheFromPool = peekCacheFromPool();
  return null === cacheFromPool
    ? null
    : { parent: CacheContext._currentValue2, pool: cacheFromPool };
}
var appendAllChildren, updateHostContainer, updateHostComponent, updateHostText;
appendAllChildren = function (parent, workInProgress) {
  for (var node = workInProgress.child; null !== node; ) {
    if (5 === node.tag || 6 === node.tag) {
      var parentInstance = parent,
        child = node.stateNode,
        index = parentInstance.children.indexOf(child);
      -1 !== index && parentInstance.children.splice(index, 1);
      parentInstance.children.push(child);
    } else if (4 !== node.tag && null !== node.child) {
      node.child.return = node;
      node = node.child;
      continue;
    }
    if (node === workInProgress) break;
    for (; null === node.sibling; ) {
      if (null === node.return || node.return === workInProgress) return;
      node = node.return;
    }
    node.sibling.return = node.return;
    node = node.sibling;
  }
};
updateHostContainer = function () {};
updateHostComponent = function (current, workInProgress, type, newProps) {
  current.memoizedProps !== newProps &&
    (workInProgress.updateQueue = UPDATE_SIGNAL) &&
    (workInProgress.flags |= 4);
};
updateHostText = function (current, workInProgress, oldText, newText) {
  oldText !== newText && (workInProgress.flags |= 4);
};
function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
  switch (renderState.tailMode) {
    case "hidden":
      hasRenderedATailFallback = renderState.tail;
      for (var lastTailNode = null; null !== hasRenderedATailFallback; )
        null !== hasRenderedATailFallback.alternate &&
          (lastTailNode = hasRenderedATailFallback),
          (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
      null === lastTailNode
        ? (renderState.tail = null)
        : (lastTailNode.sibling = null);
      break;
    case "collapsed":
      lastTailNode = renderState.tail;
      for (var lastTailNode$60 = null; null !== lastTailNode; )
        null !== lastTailNode.alternate && (lastTailNode$60 = lastTailNode),
          (lastTailNode = lastTailNode.sibling);
      null === lastTailNode$60
        ? hasRenderedATailFallback || null === renderState.tail
          ? (renderState.tail = null)
          : (renderState.tail.sibling = null)
        : (lastTailNode$60.sibling = null);
  }
}
function bubbleProperties(completedWork) {
  var didBailout =
      null !== completedWork.alternate &&
      completedWork.alternate.child === completedWork.child,
    newChildLanes = 0,
    subtreeFlags = 0;
  if (didBailout)
    if (0 !== (completedWork.mode & 2)) {
      for (
        var treeBaseDuration$62 = completedWork.selfBaseDuration,
          child$63 = completedWork.child;
        null !== child$63;

      )
        (newChildLanes |= child$63.lanes | child$63.childLanes),
          (subtreeFlags |= child$63.subtreeFlags & 14680064),
          (subtreeFlags |= child$63.flags & 14680064),
          (treeBaseDuration$62 += child$63.treeBaseDuration),
          (child$63 = child$63.sibling);
      completedWork.treeBaseDuration = treeBaseDuration$62;
    } else
      for (
        treeBaseDuration$62 = completedWork.child;
        null !== treeBaseDuration$62;

      )
        (newChildLanes |=
          treeBaseDuration$62.lanes | treeBaseDuration$62.childLanes),
          (subtreeFlags |= treeBaseDuration$62.subtreeFlags & 14680064),
          (subtreeFlags |= treeBaseDuration$62.flags & 14680064),
          (treeBaseDuration$62.return = completedWork),
          (treeBaseDuration$62 = treeBaseDuration$62.sibling);
  else if (0 !== (completedWork.mode & 2)) {
    treeBaseDuration$62 = completedWork.actualDuration;
    child$63 = completedWork.selfBaseDuration;
    for (var child = completedWork.child; null !== child; )
      (newChildLanes |= child.lanes | child.childLanes),
        (subtreeFlags |= child.subtreeFlags),
        (subtreeFlags |= child.flags),
        (treeBaseDuration$62 += child.actualDuration),
        (child$63 += child.treeBaseDuration),
        (child = child.sibling);
    completedWork.actualDuration = treeBaseDuration$62;
    completedWork.treeBaseDuration = child$63;
  } else
    for (
      treeBaseDuration$62 = completedWork.child;
      null !== treeBaseDuration$62;

    )
      (newChildLanes |=
        treeBaseDuration$62.lanes | treeBaseDuration$62.childLanes),
        (subtreeFlags |= treeBaseDuration$62.subtreeFlags),
        (subtreeFlags |= treeBaseDuration$62.flags),
        (treeBaseDuration$62.return = completedWork),
        (treeBaseDuration$62 = treeBaseDuration$62.sibling);
  completedWork.subtreeFlags |= subtreeFlags;
  completedWork.childLanes = newChildLanes;
  return didBailout;
}
function completeWork(current, workInProgress, renderLanes) {
  var newProps = workInProgress.pendingProps;
  switch (workInProgress.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return bubbleProperties(workInProgress), null;
    case 1:
      return (
        isContextProvider(workInProgress.type) && popContext(),
        bubbleProperties(workInProgress),
        null
      );
    case 3:
      return (
        (renderLanes = workInProgress.stateNode),
        (newProps = null),
        null !== current && (newProps = current.memoizedState.cache),
        workInProgress.memoizedState.cache !== newProps &&
          (workInProgress.flags |= 2048),
        popProvider(CacheContext),
        popHostContainer(),
        pop(didPerformWorkStackCursor),
        pop(contextStackCursor$1),
        resetWorkInProgressVersions(),
        renderLanes.pendingContext &&
          ((renderLanes.context = renderLanes.pendingContext),
          (renderLanes.pendingContext = null)),
        (null !== current && null !== current.child) ||
          null === current ||
          (current.memoizedState.isDehydrated &&
            0 === (workInProgress.flags & 256)) ||
          ((workInProgress.flags |= 1024),
          null !== hydrationErrors &&
            (queueRecoverableErrors(hydrationErrors),
            (hydrationErrors = null))),
        updateHostContainer(current, workInProgress),
        bubbleProperties(workInProgress),
        null
      );
    case 26:
    case 27:
    case 5:
      popHostContext(workInProgress);
      renderLanes = workInProgress.type;
      if (null !== current && null != workInProgress.stateNode)
        updateHostComponent(current, workInProgress, renderLanes, newProps),
          current.ref !== workInProgress.ref &&
            (workInProgress.flags |= 2097664);
      else {
        if (!newProps) {
          if (null === workInProgress.stateNode)
            throw Error(
              "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
            );
          bubbleProperties(workInProgress);
          return null;
        }
        current = {
          type: renderLanes,
          props: newProps,
          isHidden: !1,
          children: [],
          internalInstanceHandle: workInProgress,
          rootContainerInstance: rootInstanceStackCursor.current,
          tag: "INSTANCE"
        };
        appendAllChildren(current, workInProgress, !1, !1);
        workInProgress.stateNode = current;
        null !== workInProgress.ref && (workInProgress.flags |= 2097664);
      }
      bubbleProperties(workInProgress);
      return null;
    case 6:
      if (current && null != workInProgress.stateNode)
        updateHostText(
          current,
          workInProgress,
          current.memoizedProps,
          newProps
        );
      else {
        if ("string" !== typeof newProps && null === workInProgress.stateNode)
          throw Error(
            "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
          );
        workInProgress.stateNode = {
          text: newProps,
          isHidden: !1,
          tag: "TEXT"
        };
      }
      bubbleProperties(workInProgress);
      return null;
    case 13:
      popSuspenseHandler(workInProgress);
      newProps = workInProgress.memoizedState;
      if (
        null === current ||
        (null !== current.memoizedState &&
          null !== current.memoizedState.dehydrated)
      ) {
        if (null !== newProps && null !== newProps.dehydrated) {
          if (null === current) {
            throw Error(
              "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
            );
            throw Error(
              "Expected prepareToHydrateHostSuspenseInstance() to never be called. This error is likely caused by a bug in React. Please file an issue."
            );
          }
          0 === (workInProgress.flags & 128) &&
            (workInProgress.memoizedState = null);
          workInProgress.flags |= 4;
          bubbleProperties(workInProgress);
          if (0 !== (workInProgress.mode & 2) && null !== newProps) {
            var JSCompiler_inline_result = workInProgress.child;
            null !== JSCompiler_inline_result &&
              (workInProgress.treeBaseDuration -=
                JSCompiler_inline_result.treeBaseDuration);
          }
          JSCompiler_inline_result = !1;
        } else
          null !== hydrationErrors &&
            (queueRecoverableErrors(hydrationErrors), (hydrationErrors = null)),
            (JSCompiler_inline_result = !0);
        if (!JSCompiler_inline_result)
          return workInProgress.flags & 65536 ? workInProgress : null;
      }
      if (0 !== (workInProgress.flags & 128))
        return (
          (workInProgress.lanes = renderLanes),
          0 !== (workInProgress.mode & 2) &&
            transferActualDuration(workInProgress),
          workInProgress
        );
      renderLanes = null !== newProps;
      current = null !== current && null !== current.memoizedState;
      if (renderLanes) {
        newProps = workInProgress.child;
        JSCompiler_inline_result = null;
        null !== newProps.alternate &&
          null !== newProps.alternate.memoizedState &&
          null !== newProps.alternate.memoizedState.cachePool &&
          (JSCompiler_inline_result =
            newProps.alternate.memoizedState.cachePool.pool);
        var cache$70 = null;
        null !== newProps.memoizedState &&
          null !== newProps.memoizedState.cachePool &&
          (cache$70 = newProps.memoizedState.cachePool.pool);
        cache$70 !== JSCompiler_inline_result && (newProps.flags |= 2048);
      }
      renderLanes !== current &&
        renderLanes &&
        (workInProgress.child.flags |= 8192);
      null !== workInProgress.updateQueue && (workInProgress.flags |= 4);
      bubbleProperties(workInProgress);
      0 !== (workInProgress.mode & 2) &&
        renderLanes &&
        ((current = workInProgress.child),
        null !== current &&
          (workInProgress.treeBaseDuration -= current.treeBaseDuration));
      return null;
    case 4:
      return (
        popHostContainer(),
        updateHostContainer(current, workInProgress),
        bubbleProperties(workInProgress),
        null
      );
    case 10:
      return (
        popProvider(workInProgress.type._context),
        bubbleProperties(workInProgress),
        null
      );
    case 17:
      return (
        isContextProvider(workInProgress.type) && popContext(),
        bubbleProperties(workInProgress),
        null
      );
    case 19:
      pop(suspenseStackCursor);
      JSCompiler_inline_result = workInProgress.memoizedState;
      if (null === JSCompiler_inline_result)
        return bubbleProperties(workInProgress), null;
      newProps = 0 !== (workInProgress.flags & 128);
      cache$70 = JSCompiler_inline_result.rendering;
      if (null === cache$70)
        if (newProps) cutOffTailIfNeeded(JSCompiler_inline_result, !1);
        else {
          if (
            0 !== workInProgressRootExitStatus ||
            (null !== current && 0 !== (current.flags & 128))
          )
            for (current = workInProgress.child; null !== current; ) {
              cache$70 = findFirstSuspended(current);
              if (null !== cache$70) {
                workInProgress.flags |= 128;
                cutOffTailIfNeeded(JSCompiler_inline_result, !1);
                current = cache$70.updateQueue;
                null !== current &&
                  ((workInProgress.updateQueue = current),
                  (workInProgress.flags |= 4));
                workInProgress.subtreeFlags = 0;
                current = renderLanes;
                for (renderLanes = workInProgress.child; null !== renderLanes; )
                  resetWorkInProgress(renderLanes, current),
                    (renderLanes = renderLanes.sibling);
                push(
                  suspenseStackCursor,
                  (suspenseStackCursor.current & 1) | 2
                );
                return workInProgress.child;
              }
              current = current.sibling;
            }
          null !== JSCompiler_inline_result.tail &&
            now$1() > workInProgressRootRenderTargetTime &&
            ((workInProgress.flags |= 128),
            (newProps = !0),
            cutOffTailIfNeeded(JSCompiler_inline_result, !1),
            (workInProgress.lanes = 8388608));
        }
      else {
        if (!newProps)
          if (((current = findFirstSuspended(cache$70)), null !== current)) {
            if (
              ((workInProgress.flags |= 128),
              (newProps = !0),
              (current = current.updateQueue),
              null !== current &&
                ((workInProgress.updateQueue = current),
                (workInProgress.flags |= 4)),
              cutOffTailIfNeeded(JSCompiler_inline_result, !0),
              null === JSCompiler_inline_result.tail &&
                "hidden" === JSCompiler_inline_result.tailMode &&
                !cache$70.alternate)
            )
              return bubbleProperties(workInProgress), null;
          } else
            2 * now$1() - JSCompiler_inline_result.renderingStartTime >
              workInProgressRootRenderTargetTime &&
              1073741824 !== renderLanes &&
              ((workInProgress.flags |= 128),
              (newProps = !0),
              cutOffTailIfNeeded(JSCompiler_inline_result, !1),
              (workInProgress.lanes = 8388608));
        JSCompiler_inline_result.isBackwards
          ? ((cache$70.sibling = workInProgress.child),
            (workInProgress.child = cache$70))
          : ((current = JSCompiler_inline_result.last),
            null !== current
              ? (current.sibling = cache$70)
              : (workInProgress.child = cache$70),
            (JSCompiler_inline_result.last = cache$70));
      }
      if (null !== JSCompiler_inline_result.tail)
        return (
          (workInProgress = JSCompiler_inline_result.tail),
          (JSCompiler_inline_result.rendering = workInProgress),
          (JSCompiler_inline_result.tail = workInProgress.sibling),
          (JSCompiler_inline_result.renderingStartTime = now$1()),
          (workInProgress.sibling = null),
          (current = suspenseStackCursor.current),
          push(suspenseStackCursor, newProps ? (current & 1) | 2 : current & 1),
          workInProgress
        );
      bubbleProperties(workInProgress);
      return null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        (newProps = null !== workInProgress.memoizedState),
        null !== current
          ? (null !== current.memoizedState) !== newProps &&
            (workInProgress.flags |= 8192)
          : newProps && (workInProgress.flags |= 8192),
        newProps && 0 !== (workInProgress.mode & 1)
          ? 0 !== (renderLanes & 1073741824) &&
            0 === (workInProgress.flags & 128) &&
            (bubbleProperties(workInProgress),
            workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192))
          : bubbleProperties(workInProgress),
        null !== workInProgress.updateQueue && (workInProgress.flags |= 4),
        (renderLanes = null),
        null !== current &&
          null !== current.memoizedState &&
          null !== current.memoizedState.cachePool &&
          (renderLanes = current.memoizedState.cachePool.pool),
        (newProps = null),
        null !== workInProgress.memoizedState &&
          null !== workInProgress.memoizedState.cachePool &&
          (newProps = workInProgress.memoizedState.cachePool.pool),
        newProps !== renderLanes && (workInProgress.flags |= 2048),
        null !== current && pop(resumedCache),
        null
      );
    case 24:
      return (
        (renderLanes = null),
        null !== current && (renderLanes = current.memoizedState.cache),
        workInProgress.memoizedState.cache !== renderLanes &&
          (workInProgress.flags |= 2048),
        popProvider(CacheContext),
        bubbleProperties(workInProgress),
        null
      );
    case 25:
      return null;
  }
  throw Error(
    "Unknown unit of work tag (" +
      workInProgress.tag +
      "). This error is likely caused by a bug in React. Please file an issue."
  );
}
function unwindWork(current, workInProgress) {
  switch (workInProgress.tag) {
    case 1:
      return (
        isContextProvider(workInProgress.type) && popContext(),
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128),
            0 !== (workInProgress.mode & 2) &&
              transferActualDuration(workInProgress),
            workInProgress)
          : null
      );
    case 3:
      return (
        popProvider(CacheContext),
        popHostContainer(),
        pop(didPerformWorkStackCursor),
        pop(contextStackCursor$1),
        resetWorkInProgressVersions(),
        (current = workInProgress.flags),
        0 !== (current & 65536) && 0 === (current & 128)
          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
          : null
      );
    case 26:
    case 27:
    case 5:
      return popHostContext(workInProgress), null;
    case 13:
      popSuspenseHandler(workInProgress);
      current = workInProgress.memoizedState;
      if (
        null !== current &&
        null !== current.dehydrated &&
        null === workInProgress.alternate
      )
        throw Error(
          "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
        );
      current = workInProgress.flags;
      return current & 65536
        ? ((workInProgress.flags = (current & -65537) | 128),
          0 !== (workInProgress.mode & 2) &&
            transferActualDuration(workInProgress),
          workInProgress)
        : null;
    case 19:
      return pop(suspenseStackCursor), null;
    case 4:
      return popHostContainer(), null;
    case 10:
      return popProvider(workInProgress.type._context), null;
    case 22:
    case 23:
      return (
        popSuspenseHandler(workInProgress),
        popHiddenContext(),
        null !== current && pop(resumedCache),
        (current = workInProgress.flags),
        current & 65536
          ? ((workInProgress.flags = (current & -65537) | 128),
            0 !== (workInProgress.mode & 2) &&
              transferActualDuration(workInProgress),
            workInProgress)
          : null
      );
    case 24:
      return popProvider(CacheContext), null;
    case 25:
      return null;
    default:
      return null;
  }
}
function unwindInterruptedWork(current, interruptedWork) {
  switch (interruptedWork.tag) {
    case 1:
      current = interruptedWork.type.childContextTypes;
      null !== current && void 0 !== current && popContext();
      break;
    case 3:
      popProvider(CacheContext);
      popHostContainer();
      pop(didPerformWorkStackCursor);
      pop(contextStackCursor$1);
      resetWorkInProgressVersions();
      break;
    case 26:
    case 27:
    case 5:
      popHostContext(interruptedWork);
      break;
    case 4:
      popHostContainer();
      break;
    case 13:
      popSuspenseHandler(interruptedWork);
      break;
    case 19:
      pop(suspenseStackCursor);
      break;
    case 10:
      popProvider(interruptedWork.type._context);
      break;
    case 22:
    case 23:
      popSuspenseHandler(interruptedWork);
      popHiddenContext();
      null !== current && pop(resumedCache);
      break;
    case 24:
      popProvider(CacheContext);
  }
}
var offscreenSubtreeIsHidden = !1,
  offscreenSubtreeWasHidden = !1,
  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
  nextEffect = null;
function shouldProfile(current) {
  return 0 !== (current.mode & 2) && 0 !== (executionContext & 4);
}
function callComponentWillUnmountWithTimer(current, instance) {
  instance.props = current.memoizedProps;
  instance.state = current.memoizedState;
  if (shouldProfile(current))
    try {
      startLayoutEffectTimer(), instance.componentWillUnmount();
    } finally {
      recordLayoutEffectDuration(current);
    }
  else instance.componentWillUnmount();
}
function safelyAttachRef(current, nearestMountedAncestor) {
  try {
    var ref = current.ref;
    if (null !== ref) {
      var instance = current.stateNode;
      switch (current.tag) {
        case 26:
        case 27:
        case 5:
          var instanceToUse = getPublicInstance(instance);
          break;
        default:
          instanceToUse = instance;
      }
      if ("function" === typeof ref)
        if (shouldProfile(current))
          try {
            startLayoutEffectTimer(), (current.refCleanup = ref(instanceToUse));
          } finally {
            recordLayoutEffectDuration(current);
          }
        else current.refCleanup = ref(instanceToUse);
      else ref.current = instanceToUse;
    }
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
function safelyDetachRef(current, nearestMountedAncestor) {
  var ref = current.ref,
    refCleanup = current.refCleanup;
  if (null !== ref)
    if ("function" === typeof refCleanup)
      try {
        if (shouldProfile(current))
          try {
            startLayoutEffectTimer(), refCleanup();
          } finally {
            recordLayoutEffectDuration(current);
          }
        else refCleanup();
      } catch (error) {
        captureCommitPhaseError(current, nearestMountedAncestor, error);
      } finally {
        (current.refCleanup = null),
          (current = current.alternate),
          null != current && (current.refCleanup = null);
      }
    else if ("function" === typeof ref)
      try {
        if (shouldProfile(current))
          try {
            startLayoutEffectTimer(), ref(null);
          } finally {
            recordLayoutEffectDuration(current);
          }
        else ref(null);
      } catch (error$84) {
        captureCommitPhaseError(current, nearestMountedAncestor, error$84);
      }
    else ref.current = null;
}
function safelyCallDestroy(current, nearestMountedAncestor, destroy) {
  try {
    destroy();
  } catch (error) {
    captureCommitPhaseError(current, nearestMountedAncestor, error);
  }
}
var shouldFireAfterActiveInstanceBlur = !1;
function commitBeforeMutationEffects(root, firstChild) {
  for (nextEffect = firstChild; null !== nextEffect; )
    if (
      ((root = nextEffect),
      (firstChild = root.child),
      0 !== (root.subtreeFlags & 1028) && null !== firstChild)
    )
      (firstChild.return = root), (nextEffect = firstChild);
    else
      for (; null !== nextEffect; ) {
        root = nextEffect;
        try {
          var current = root.alternate,
            flags = root.flags;
          switch (root.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (0 !== (flags & 1024) && null !== current) {
                var prevProps = current.memoizedProps,
                  prevState = current.memoizedState,
                  instance = root.stateNode,
                  snapshot = instance.getSnapshotBeforeUpdate(
                    root.elementType === root.type
                      ? prevProps
                      : resolveDefaultProps(root.type, prevProps),
                    prevState
                  );
                instance.__reactInternalSnapshotBeforeUpdate = snapshot;
              }
              break;
            case 3:
              0 !== (flags & 1024) &&
                root.stateNode.containerInfo.children.splice(0);
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (0 !== (flags & 1024))
                throw Error(
                  "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                );
          }
        } catch (error) {
          captureCommitPhaseError(root, root.return, error);
        }
        firstChild = root.sibling;
        if (null !== firstChild) {
          firstChild.return = root.return;
          nextEffect = firstChild;
          break;
        }
        nextEffect = root.return;
      }
  current = shouldFireAfterActiveInstanceBlur;
  shouldFireAfterActiveInstanceBlur = !1;
  return current;
}
function commitHookEffectListUnmount(
  flags,
  finishedWork,
  nearestMountedAncestor
) {
  var updateQueue = finishedWork.updateQueue;
  updateQueue = null !== updateQueue ? updateQueue.lastEffect : null;
  if (null !== updateQueue) {
    var effect = (updateQueue = updateQueue.next);
    do {
      if ((effect.tag & flags) === flags) {
        var destroy = effect.destroy;
        effect.destroy = void 0;
        void 0 !== destroy &&
          safelyCallDestroy(finishedWork, nearestMountedAncestor, destroy);
      }
      effect = effect.next;
    } while (effect !== updateQueue);
  }
}
function commitHookEffectListMount(flags, finishedWork) {
  finishedWork = finishedWork.updateQueue;
  finishedWork = null !== finishedWork ? finishedWork.lastEffect : null;
  if (null !== finishedWork) {
    var effect = (finishedWork = finishedWork.next);
    do {
      if ((effect.tag & flags) === flags) {
        var create$85 = effect.create;
        effect.destroy = create$85();
      }
      effect = effect.next;
    } while (effect !== finishedWork);
  }
}
function commitHookLayoutEffects(finishedWork, hookFlags) {
  if (shouldProfile(finishedWork)) {
    try {
      startLayoutEffectTimer(),
        commitHookEffectListMount(hookFlags, finishedWork);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    recordLayoutEffectDuration(finishedWork);
  } else
    try {
      commitHookEffectListMount(hookFlags, finishedWork);
    } catch (error$87) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error$87);
    }
}
function commitClassCallbacks(finishedWork) {
  var updateQueue = finishedWork.updateQueue;
  if (null !== updateQueue) {
    var instance = finishedWork.stateNode;
    try {
      commitCallbacks(updateQueue, instance);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
  }
}
function commitProfilerUpdate(finishedWork, current) {
  if (executionContext & 4)
    try {
      var _finishedWork$memoize2 = finishedWork.memoizedProps,
        onCommit = _finishedWork$memoize2.onCommit,
        onRender = _finishedWork$memoize2.onRender,
        effectDuration = finishedWork.stateNode.effectDuration;
      _finishedWork$memoize2 = commitTime;
      current = null === current ? "mount" : "update";
      currentUpdateIsNested && (current = "nested-update");
      "function" === typeof onRender &&
        onRender(
          finishedWork.memoizedProps.id,
          current,
          finishedWork.actualDuration,
          finishedWork.treeBaseDuration,
          finishedWork.actualStartTime,
          _finishedWork$memoize2
        );
      "function" === typeof onCommit &&
        onCommit(
          finishedWork.memoizedProps.id,
          current,
          effectDuration,
          _finishedWork$memoize2
        );
      enqueuePendingPassiveProfilerEffect(finishedWork);
      var parentFiber = finishedWork.return;
      a: for (; null !== parentFiber; ) {
        switch (parentFiber.tag) {
          case 3:
            parentFiber.stateNode.effectDuration += effectDuration;
            break a;
          case 12:
            parentFiber.stateNode.effectDuration += effectDuration;
            break a;
        }
        parentFiber = parentFiber.return;
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
}
function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitHookLayoutEffects(finishedWork, 5);
      break;
    case 1:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 4)
        if (((finishedRoot = finishedWork.stateNode), null === current))
          if (shouldProfile(finishedWork)) {
            try {
              startLayoutEffectTimer(), finishedRoot.componentDidMount();
            } catch (error) {
              captureCommitPhaseError(finishedWork, finishedWork.return, error);
            }
            recordLayoutEffectDuration(finishedWork);
          } else
            try {
              finishedRoot.componentDidMount();
            } catch (error$88) {
              captureCommitPhaseError(
                finishedWork,
                finishedWork.return,
                error$88
              );
            }
        else {
          var prevProps =
            finishedWork.elementType === finishedWork.type
              ? current.memoizedProps
              : resolveDefaultProps(finishedWork.type, current.memoizedProps);
          current = current.memoizedState;
          if (shouldProfile(finishedWork)) {
            try {
              startLayoutEffectTimer(),
                finishedRoot.componentDidUpdate(
                  prevProps,
                  current,
                  finishedRoot.__reactInternalSnapshotBeforeUpdate
                );
            } catch (error$89) {
              captureCommitPhaseError(
                finishedWork,
                finishedWork.return,
                error$89
              );
            }
            recordLayoutEffectDuration(finishedWork);
          } else
            try {
              finishedRoot.componentDidUpdate(
                prevProps,
                current,
                finishedRoot.__reactInternalSnapshotBeforeUpdate
              );
            } catch (error$90) {
              captureCommitPhaseError(
                finishedWork,
                finishedWork.return,
                error$90
              );
            }
        }
      flags & 64 && commitClassCallbacks(finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 3:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      if (flags & 64 && ((flags = finishedWork.updateQueue), null !== flags)) {
        finishedRoot = null;
        if (null !== finishedWork.child)
          switch (finishedWork.child.tag) {
            case 27:
            case 5:
              finishedRoot = getPublicInstance(finishedWork.child.stateNode);
              break;
            case 1:
              finishedRoot = finishedWork.child.stateNode;
          }
        try {
          commitCallbacks(flags, finishedRoot);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
      }
      break;
    case 26:
    case 27:
    case 5:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
      break;
    case 12:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 4 && commitProfilerUpdate(finishedWork, current);
      break;
    case 13:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      break;
    case 22:
      if (0 !== (finishedWork.mode & 1)) {
        if (
          ((prevProps =
            null !== finishedWork.memoizedState || offscreenSubtreeIsHidden),
          !prevProps)
        ) {
          current =
            (null !== current && null !== current.memoizedState) ||
            offscreenSubtreeWasHidden;
          var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
            prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
          offscreenSubtreeIsHidden = prevProps;
          (offscreenSubtreeWasHidden = current) &&
          !prevOffscreenSubtreeWasHidden
            ? recursivelyTraverseReappearLayoutEffects(
                finishedRoot,
                finishedWork,
                0 !== (finishedWork.subtreeFlags & 8772)
              )
            : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
          offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
          offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
        }
      } else recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
      flags & 512 &&
        ("manual" === finishedWork.memoizedProps.mode
          ? safelyAttachRef(finishedWork, finishedWork.return)
          : safelyDetachRef(finishedWork, finishedWork.return));
      break;
    default:
      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
  }
}
function detachFiberAfterEffects(fiber) {
  var alternate = fiber.alternate;
  null !== alternate &&
    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
  fiber.child = null;
  fiber.deletions = null;
  fiber.sibling = null;
  fiber.stateNode = null;
  fiber.return = null;
  fiber.dependencies = null;
  fiber.memoizedProps = null;
  fiber.memoizedState = null;
  fiber.pendingProps = null;
  fiber.stateNode = null;
  fiber.updateQueue = null;
}
function isHostParent(fiber) {
  return 5 === fiber.tag || 3 === fiber.tag || 4 === fiber.tag;
}
function getHostSibling(fiber) {
  a: for (;;) {
    for (; null === fiber.sibling; ) {
      if (null === fiber.return || isHostParent(fiber.return)) return null;
      fiber = fiber.return;
    }
    fiber.sibling.return = fiber.return;
    for (
      fiber = fiber.sibling;
      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

    ) {
      if (fiber.flags & 2) continue a;
      if (null === fiber.child || 4 === fiber.tag) continue a;
      else (fiber.child.return = fiber), (fiber = fiber.child);
    }
    if (!(fiber.flags & 2)) return fiber.stateNode;
  }
}
function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before ? insertBefore(parent, node, before) : appendChild(parent, node);
  else if (4 !== tag && ((node = node.child), null !== node))
    for (
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
        (node = node.sibling);
}
function insertOrAppendPlacementNode(node, before, parent) {
  var tag = node.tag;
  if (5 === tag || 6 === tag)
    (node = node.stateNode),
      before ? insertBefore(parent, node, before) : appendChild(parent, node);
  else if (4 !== tag && ((node = node.child), null !== node))
    for (
      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
      null !== node;

    )
      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
}
var hostParent = null;
function recursivelyTraverseDeletionEffects(
  finishedRoot,
  nearestMountedAncestor,
  parent
) {
  for (parent = parent.child; null !== parent; )
    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
      (parent = parent.sibling);
}
function commitDeletionEffectsOnFiber(
  finishedRoot,
  nearestMountedAncestor,
  deletedFiber
) {
  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
    try {
      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
    } catch (err) {}
  switch (deletedFiber.tag) {
    case 26:
    case 27:
    case 5:
      offscreenSubtreeWasHidden ||
        safelyDetachRef(deletedFiber, nearestMountedAncestor);
    case 6:
      var prevHostParent = hostParent;
      hostParent = null;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      null !== hostParent &&
        ((finishedRoot = hostParent),
        (deletedFiber = finishedRoot.children.indexOf(deletedFiber.stateNode)),
        finishedRoot.children.splice(deletedFiber, 1));
      break;
    case 18:
      null !== hostParent && shim();
      break;
    case 4:
      prevHostParent = hostParent;
      hostParent = deletedFiber.stateNode.containerInfo;
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      hostParent = prevHostParent;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !offscreenSubtreeWasHidden &&
        ((prevHostParent = deletedFiber.updateQueue),
        null !== prevHostParent &&
          ((prevHostParent = prevHostParent.lastEffect),
          null !== prevHostParent))
      ) {
        var effect = (prevHostParent = prevHostParent.next);
        do {
          var _effect = effect,
            destroy = _effect.destroy;
          _effect = _effect.tag;
          void 0 !== destroy &&
            (0 !== (_effect & 2)
              ? safelyCallDestroy(deletedFiber, nearestMountedAncestor, destroy)
              : 0 !== (_effect & 4) &&
                (shouldProfile(deletedFiber)
                  ? (startLayoutEffectTimer(),
                    safelyCallDestroy(
                      deletedFiber,
                      nearestMountedAncestor,
                      destroy
                    ),
                    recordLayoutEffectDuration(deletedFiber))
                  : safelyCallDestroy(
                      deletedFiber,
                      nearestMountedAncestor,
                      destroy
                    )));
          effect = effect.next;
        } while (effect !== prevHostParent);
      }
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 1:
      if (
        !offscreenSubtreeWasHidden &&
        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
        (prevHostParent = deletedFiber.stateNode),
        "function" === typeof prevHostParent.componentWillUnmount)
      )
        try {
          callComponentWillUnmountWithTimer(deletedFiber, prevHostParent);
        } catch (error) {
          captureCommitPhaseError(deletedFiber, nearestMountedAncestor, error);
        }
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 21:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
      break;
    case 22:
      safelyDetachRef(deletedFiber, nearestMountedAncestor);
      deletedFiber.mode & 1
        ? ((offscreenSubtreeWasHidden =
            (prevHostParent = offscreenSubtreeWasHidden) ||
            null !== deletedFiber.memoizedState),
          recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          ),
          (offscreenSubtreeWasHidden = prevHostParent))
        : recursivelyTraverseDeletionEffects(
            finishedRoot,
            nearestMountedAncestor,
            deletedFiber
          );
      break;
    default:
      recursivelyTraverseDeletionEffects(
        finishedRoot,
        nearestMountedAncestor,
        deletedFiber
      );
  }
}
function getRetryCache(finishedWork) {
  switch (finishedWork.tag) {
    case 13:
    case 19:
      var retryCache = finishedWork.stateNode;
      null === retryCache &&
        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
      return retryCache;
    case 22:
      return (
        (finishedWork = finishedWork.stateNode),
        (retryCache = finishedWork._retryCache),
        null === retryCache &&
          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
        retryCache
      );
    default:
      throw Error(
        "Unexpected Suspense handler tag (" +
          finishedWork.tag +
          "). This is a bug in React."
      );
  }
}
function attachSuspenseRetryListeners(finishedWork, wakeables) {
  var retryCache = getRetryCache(finishedWork);
  wakeables.forEach(function (wakeable) {
    var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
    retryCache.has(wakeable) ||
      (retryCache.add(wakeable), wakeable.then(retry, retry));
  });
}
function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
  var deletions = parentFiber.deletions;
  if (null !== deletions)
    for (var i = 0; i < deletions.length; i++) {
      var childToDelete = deletions[i];
      try {
        var root = root$jscomp$0,
          returnFiber = parentFiber,
          parent = returnFiber;
        a: for (; null !== parent; ) {
          switch (parent.tag) {
            case 27:
            case 5:
              hostParent = parent.stateNode;
              break a;
            case 3:
              hostParent = parent.stateNode.containerInfo;
              break a;
            case 4:
              hostParent = parent.stateNode.containerInfo;
              break a;
          }
          parent = parent.return;
        }
        if (null === hostParent)
          throw Error(
            "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
          );
        commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
        hostParent = null;
        var alternate = childToDelete.alternate;
        null !== alternate && (alternate.return = null);
        childToDelete.return = null;
      } catch (error) {
        captureCommitPhaseError(childToDelete, parentFiber, error);
      }
    }
  if (parentFiber.subtreeFlags & 12854)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
        (parentFiber = parentFiber.sibling);
}
function commitMutationEffectsOnFiber(finishedWork, root) {
  var current = finishedWork.alternate,
    flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        try {
          commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
            commitHookEffectListMount(3, finishedWork);
        } catch (error) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error);
        }
        if (shouldProfile(finishedWork)) {
          try {
            startLayoutEffectTimer(),
              commitHookEffectListUnmount(5, finishedWork, finishedWork.return);
          } catch (error$99) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$99
            );
          }
          recordLayoutEffectDuration(finishedWork);
        } else
          try {
            commitHookEffectListUnmount(5, finishedWork, finishedWork.return);
          } catch (error$100) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$100
            );
          }
      }
      break;
    case 1:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      if (
        flags & 64 &&
        offscreenSubtreeIsHidden &&
        ((finishedWork = finishedWork.updateQueue),
        null !== finishedWork &&
          ((flags = finishedWork.callbacks), null !== flags))
      ) {
        var existingHiddenCallbacks = finishedWork.shared.hiddenCallbacks;
        finishedWork.shared.hiddenCallbacks =
          null === existingHiddenCallbacks
            ? flags
            : existingHiddenCallbacks.concat(flags);
      }
      break;
    case 26:
    case 27:
    case 5:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      if (flags & 4 && ((flags = finishedWork.stateNode), null != flags)) {
        existingHiddenCallbacks = finishedWork.memoizedProps;
        var type = finishedWork.type;
        current = finishedWork.updateQueue;
        finishedWork.updateQueue = null;
        if (null !== current)
          try {
            (flags.type = type), (flags.props = existingHiddenCallbacks);
          } catch (error$103) {
            captureCommitPhaseError(
              finishedWork,
              finishedWork.return,
              error$103
            );
          }
      }
      break;
    case 6:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      if (flags & 4) {
        if (null === finishedWork.stateNode)
          throw Error(
            "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
          );
        flags = finishedWork.stateNode;
        existingHiddenCallbacks = finishedWork.memoizedProps;
        try {
          flags.text = existingHiddenCallbacks;
        } catch (error$104) {
          captureCommitPhaseError(finishedWork, finishedWork.return, error$104);
        }
      }
      break;
    case 3:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      break;
    case 4:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      break;
    case 13:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      existingHiddenCallbacks = finishedWork.child;
      existingHiddenCallbacks.flags & 8192 &&
        null !== existingHiddenCallbacks.memoizedState &&
        (null === existingHiddenCallbacks.alternate ||
          null === existingHiddenCallbacks.alternate.memoizedState) &&
        (globalMostRecentFallbackTime = now$1());
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 22:
      flags & 512 &&
        null !== current &&
        safelyDetachRef(current, current.return);
      existingHiddenCallbacks = null !== finishedWork.memoizedState;
      var wasHidden$108 = null !== current && null !== current.memoizedState;
      if (finishedWork.mode & 1) {
        var prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
          prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
        offscreenSubtreeIsHidden =
          prevOffscreenSubtreeIsHidden || existingHiddenCallbacks;
        offscreenSubtreeWasHidden =
          prevOffscreenSubtreeWasHidden || wasHidden$108;
        recursivelyTraverseMutationEffects(root, finishedWork);
        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
        offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
      } else recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      root = finishedWork.stateNode;
      root._current = finishedWork;
      root._visibility &= -3;
      root._visibility |= root._pendingVisibility & 2;
      if (
        flags & 8192 &&
        ((root._visibility = existingHiddenCallbacks
          ? root._visibility & -2
          : root._visibility | 1),
        existingHiddenCallbacks &&
          ((root = offscreenSubtreeIsHidden || offscreenSubtreeWasHidden),
          null === current ||
            wasHidden$108 ||
            root ||
            (0 !== (finishedWork.mode & 1) &&
              recursivelyTraverseDisappearLayoutEffects(finishedWork))),
        null === finishedWork.memoizedProps ||
          "manual" !== finishedWork.memoizedProps.mode)
      )
        a: for (current = null, wasHidden$108 = finishedWork; ; ) {
          if (5 === wasHidden$108.tag) {
            if (null === current) {
              current = wasHidden$108;
              try {
                (type = wasHidden$108.stateNode),
                  existingHiddenCallbacks
                    ? (type.isHidden = !0)
                    : (wasHidden$108.stateNode.isHidden = !1);
              } catch (error) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error
                );
              }
            }
          } else if (6 === wasHidden$108.tag) {
            if (null === current)
              try {
                wasHidden$108.stateNode.isHidden = existingHiddenCallbacks
                  ? !0
                  : !1;
              } catch (error$93) {
                captureCommitPhaseError(
                  finishedWork,
                  finishedWork.return,
                  error$93
                );
              }
          } else if (
            ((22 !== wasHidden$108.tag && 23 !== wasHidden$108.tag) ||
              null === wasHidden$108.memoizedState ||
              wasHidden$108 === finishedWork) &&
            null !== wasHidden$108.child
          ) {
            wasHidden$108.child.return = wasHidden$108;
            wasHidden$108 = wasHidden$108.child;
            continue;
          }
          if (wasHidden$108 === finishedWork) break a;
          for (; null === wasHidden$108.sibling; ) {
            if (
              null === wasHidden$108.return ||
              wasHidden$108.return === finishedWork
            )
              break a;
            current === wasHidden$108 && (current = null);
            wasHidden$108 = wasHidden$108.return;
          }
          current === wasHidden$108 && (current = null);
          wasHidden$108.sibling.return = wasHidden$108.return;
          wasHidden$108 = wasHidden$108.sibling;
        }
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((existingHiddenCallbacks = flags.wakeables),
          null !== existingHiddenCallbacks &&
            ((flags.wakeables = null),
            attachSuspenseRetryListeners(
              finishedWork,
              existingHiddenCallbacks
            ))));
      break;
    case 19:
      recursivelyTraverseMutationEffects(root, finishedWork);
      commitReconciliationEffects(finishedWork);
      flags & 4 &&
        ((flags = finishedWork.updateQueue),
        null !== flags &&
          ((finishedWork.updateQueue = null),
          attachSuspenseRetryListeners(finishedWork, flags)));
      break;
    case 21:
      break;
    default:
      recursivelyTraverseMutationEffects(root, finishedWork),
        commitReconciliationEffects(finishedWork);
  }
}
function commitReconciliationEffects(finishedWork) {
  var flags = finishedWork.flags;
  if (flags & 2) {
    try {
      a: {
        for (var parent = finishedWork.return; null !== parent; ) {
          if (isHostParent(parent)) {
            var JSCompiler_inline_result = parent;
            break a;
          }
          parent = parent.return;
        }
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      }
      switch (JSCompiler_inline_result.tag) {
        case 27:
        case 5:
          var parent$jscomp$0 = JSCompiler_inline_result.stateNode;
          JSCompiler_inline_result.flags & 32 &&
            (JSCompiler_inline_result.flags &= -33);
          var before = getHostSibling(finishedWork);
          insertOrAppendPlacementNode(finishedWork, before, parent$jscomp$0);
          break;
        case 3:
        case 4:
          var parent$94 = JSCompiler_inline_result.stateNode.containerInfo,
            before$95 = getHostSibling(finishedWork);
          insertOrAppendPlacementNodeIntoContainer(
            finishedWork,
            before$95,
            parent$94
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    finishedWork.flags &= -3;
  }
  flags & 4096 && (finishedWork.flags &= -4097);
}
function recursivelyTraverseLayoutEffects(root, parentFiber) {
  if (parentFiber.subtreeFlags & 8772)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
        (parentFiber = parentFiber.sibling);
}
function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedWork = parentFiber;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (shouldProfile(finishedWork))
          try {
            startLayoutEffectTimer(),
              commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
          } finally {
            recordLayoutEffectDuration(finishedWork);
          }
        else commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 1:
        safelyDetachRef(finishedWork, finishedWork.return);
        var instance = finishedWork.stateNode;
        if ("function" === typeof instance.componentWillUnmount) {
          var current = finishedWork,
            nearestMountedAncestor = finishedWork.return;
          try {
            callComponentWillUnmountWithTimer(current, instance);
          } catch (error) {
            captureCommitPhaseError(current, nearestMountedAncestor, error);
          }
        }
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 26:
      case 27:
      case 5:
        safelyDetachRef(finishedWork, finishedWork.return);
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      case 22:
        safelyDetachRef(finishedWork, finishedWork.return);
        null === finishedWork.memoizedState &&
          recursivelyTraverseDisappearLayoutEffects(finishedWork);
        break;
      default:
        recursivelyTraverseDisappearLayoutEffects(finishedWork);
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseReappearLayoutEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var current = parentFiber.alternate,
      finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        commitHookLayoutEffects(finishedWork, 4);
        break;
      case 1:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        finishedRoot = finishedWork.stateNode;
        if ("function" === typeof finishedRoot.componentDidMount)
          try {
            finishedRoot.componentDidMount();
          } catch (error) {
            captureCommitPhaseError(finishedWork, finishedWork.return, error);
          }
        current = finishedWork.updateQueue;
        if (null !== current) {
          var hiddenCallbacks = current.shared.hiddenCallbacks;
          if (null !== hiddenCallbacks)
            for (
              current.shared.hiddenCallbacks = null, current = 0;
              current < hiddenCallbacks.length;
              current++
            )
              callCallback(hiddenCallbacks[current], finishedRoot);
        }
        includeWorkInProgressEffects &&
          flags & 64 &&
          commitClassCallbacks(finishedWork);
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 26:
      case 27:
      case 5:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      case 12:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 4 &&
          commitProfilerUpdate(finishedWork, current);
        break;
      case 13:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
        break;
      case 22:
        null === finishedWork.memoizedState &&
          recursivelyTraverseReappearLayoutEffects(
            finishedRoot,
            finishedWork,
            includeWorkInProgressEffects
          );
        safelyAttachRef(finishedWork, finishedWork.return);
        break;
      default:
        recursivelyTraverseReappearLayoutEffects(
          finishedRoot,
          finishedWork,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitHookPassiveMountEffects(finishedWork, hookFlags) {
  if (shouldProfile(finishedWork)) {
    passiveEffectStartTime = now();
    try {
      commitHookEffectListMount(hookFlags, finishedWork);
    } catch (error) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error);
    }
    recordPassiveEffectDuration(finishedWork);
  } else
    try {
      commitHookEffectListMount(hookFlags, finishedWork);
    } catch (error$111) {
      captureCommitPhaseError(finishedWork, finishedWork.return, error$111);
    }
}
function commitOffscreenPassiveMountEffects(current, finishedWork) {
  var previousCache = null;
  null !== current &&
    null !== current.memoizedState &&
    null !== current.memoizedState.cachePool &&
    (previousCache = current.memoizedState.cachePool.pool);
  current = null;
  null !== finishedWork.memoizedState &&
    null !== finishedWork.memoizedState.cachePool &&
    (current = finishedWork.memoizedState.cachePool.pool);
  current !== previousCache &&
    (null != current && current.refCount++,
    null != previousCache && releaseCache(previousCache));
}
function commitCachePassiveMountEffect(current, finishedWork) {
  current = null;
  null !== finishedWork.alternate &&
    (current = finishedWork.alternate.memoizedState.cache);
  finishedWork = finishedWork.memoizedState.cache;
  finishedWork !== current &&
    (finishedWork.refCount++, null != current && releaseCache(current));
}
function recursivelyTraversePassiveMountEffects(
  root,
  parentFiber,
  committedLanes,
  committedTransitions
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveMountOnFiber(
        root,
        parentFiber,
        committedLanes,
        committedTransitions
      ),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveMountOnFiber(
  finishedRoot,
  finishedWork,
  committedLanes,
  committedTransitions
) {
  var flags = finishedWork.flags;
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 && commitHookPassiveMountEffects(finishedWork, 9);
      break;
    case 3:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        ((finishedRoot = null),
        null !== finishedWork.alternate &&
          (finishedRoot = finishedWork.alternate.memoizedState.cache),
        (finishedWork = finishedWork.memoizedState.cache),
        finishedWork !== finishedRoot &&
          (finishedWork.refCount++,
          null != finishedRoot && releaseCache(finishedRoot)));
      break;
    case 23:
      break;
    case 22:
      var instance = finishedWork.stateNode;
      null !== finishedWork.memoizedState
        ? instance._visibility & 4
          ? recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            )
          : finishedWork.mode & 1
          ? recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
          : ((instance._visibility |= 4),
            recursivelyTraversePassiveMountEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions
            ))
        : instance._visibility & 4
        ? recursivelyTraversePassiveMountEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions
          )
        : ((instance._visibility |= 4),
          recursivelyTraverseReconnectPassiveEffects(
            finishedRoot,
            finishedWork,
            committedLanes,
            committedTransitions,
            0 !== (finishedWork.subtreeFlags & 10256)
          ));
      flags & 2048 &&
        commitOffscreenPassiveMountEffects(
          finishedWork.alternate,
          finishedWork
        );
      break;
    case 24:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
      flags & 2048 &&
        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
      break;
    default:
      recursivelyTraversePassiveMountEffects(
        finishedRoot,
        finishedWork,
        committedLanes,
        committedTransitions
      );
  }
}
function recursivelyTraverseReconnectPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber,
  committedLanes$jscomp$0,
  committedTransitions$jscomp$0,
  includeWorkInProgressEffects
) {
  includeWorkInProgressEffects =
    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    var finishedRoot = finishedRoot$jscomp$0,
      finishedWork = parentFiber,
      committedLanes = committedLanes$jscomp$0,
      committedTransitions = committedTransitions$jscomp$0,
      flags = finishedWork.flags;
    switch (finishedWork.tag) {
      case 0:
      case 11:
      case 15:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        commitHookPassiveMountEffects(finishedWork, 8);
        break;
      case 23:
        break;
      case 22:
        var instance = finishedWork.stateNode;
        null !== finishedWork.memoizedState
          ? instance._visibility & 4
            ? recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              )
            : finishedWork.mode & 1
            ? recursivelyTraverseAtomicPassiveEffects(
                finishedRoot,
                finishedWork
              )
            : ((instance._visibility |= 4),
              recursivelyTraverseReconnectPassiveEffects(
                finishedRoot,
                finishedWork,
                committedLanes,
                committedTransitions,
                includeWorkInProgressEffects
              ))
          : ((instance._visibility |= 4),
            recursivelyTraverseReconnectPassiveEffects(
              finishedRoot,
              finishedWork,
              committedLanes,
              committedTransitions,
              includeWorkInProgressEffects
            ));
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitOffscreenPassiveMountEffects(
            finishedWork.alternate,
            finishedWork
          );
        break;
      case 24:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
        includeWorkInProgressEffects &&
          flags & 2048 &&
          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
        break;
      default:
        recursivelyTraverseReconnectPassiveEffects(
          finishedRoot,
          finishedWork,
          committedLanes,
          committedTransitions,
          includeWorkInProgressEffects
        );
    }
    parentFiber = parentFiber.sibling;
  }
}
function recursivelyTraverseAtomicPassiveEffects(
  finishedRoot$jscomp$0,
  parentFiber
) {
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
      var finishedRoot = finishedRoot$jscomp$0,
        finishedWork = parentFiber,
        flags = finishedWork.flags;
      switch (finishedWork.tag) {
        case 22:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitOffscreenPassiveMountEffects(
              finishedWork.alternate,
              finishedWork
            );
          break;
        case 24:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
          flags & 2048 &&
            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
          break;
        default:
          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
      }
      parentFiber = parentFiber.sibling;
    }
}
function detachAlternateSiblings(parentFiber) {
  var previousFiber = parentFiber.alternate;
  if (
    null !== previousFiber &&
    ((parentFiber = previousFiber.child), null !== parentFiber)
  ) {
    previousFiber.child = null;
    do
      (previousFiber = parentFiber.sibling),
        (parentFiber.sibling = null),
        (parentFiber = previousFiber);
    while (null !== parentFiber);
  }
}
function commitHookPassiveUnmountEffects(
  finishedWork,
  nearestMountedAncestor,
  hookFlags
) {
  shouldProfile(finishedWork)
    ? ((passiveEffectStartTime = now()),
      commitHookEffectListUnmount(
        hookFlags,
        finishedWork,
        nearestMountedAncestor
      ),
      recordPassiveEffectDuration(finishedWork))
    : commitHookEffectListUnmount(
        hookFlags,
        finishedWork,
        nearestMountedAncestor
      );
}
function recursivelyTraversePassiveUnmountEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  if (parentFiber.subtreeFlags & 10256)
    for (parentFiber = parentFiber.child; null !== parentFiber; )
      commitPassiveUnmountOnFiber(parentFiber),
        (parentFiber = parentFiber.sibling);
}
function commitPassiveUnmountOnFiber(finishedWork) {
  switch (finishedWork.tag) {
    case 0:
    case 11:
    case 15:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
      finishedWork.flags & 2048 &&
        commitHookPassiveUnmountEffects(finishedWork, finishedWork.return, 9);
      break;
    case 22:
      var instance = finishedWork.stateNode;
      null !== finishedWork.memoizedState &&
      instance._visibility & 4 &&
      (null === finishedWork.return || 13 !== finishedWork.return.tag)
        ? ((instance._visibility &= -5),
          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
        : recursivelyTraversePassiveUnmountEffects(finishedWork);
      break;
    default:
      recursivelyTraversePassiveUnmountEffects(finishedWork);
  }
}
function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
  var deletions = parentFiber.deletions;
  if (0 !== (parentFiber.flags & 16)) {
    if (null !== deletions)
      for (var i = 0; i < deletions.length; i++) {
        var childToDelete = deletions[i];
        nextEffect = childToDelete;
        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
          childToDelete,
          parentFiber
        );
      }
    detachAlternateSiblings(parentFiber);
  }
  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
    deletions = parentFiber;
    switch (deletions.tag) {
      case 0:
      case 11:
      case 15:
        commitHookPassiveUnmountEffects(deletions, deletions.return, 8);
        recursivelyTraverseDisconnectPassiveEffects(deletions);
        break;
      case 22:
        i = deletions.stateNode;
        i._visibility & 4 &&
          ((i._visibility &= -5),
          recursivelyTraverseDisconnectPassiveEffects(deletions));
        break;
      default:
        recursivelyTraverseDisconnectPassiveEffects(deletions);
    }
    parentFiber = parentFiber.sibling;
  }
}
function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
  deletedSubtreeRoot,
  nearestMountedAncestor
) {
  for (; null !== nextEffect; ) {
    var fiber = nextEffect;
    switch (fiber.tag) {
      case 0:
      case 11:
      case 15:
        commitHookPassiveUnmountEffects(fiber, nearestMountedAncestor, 8);
        break;
      case 23:
      case 22:
        if (
          null !== fiber.memoizedState &&
          null !== fiber.memoizedState.cachePool
        ) {
          var cache = fiber.memoizedState.cachePool.pool;
          null != cache && cache.refCount++;
        }
        break;
      case 24:
        releaseCache(fiber.memoizedState.cache);
    }
    cache = fiber.child;
    if (null !== cache) (cache.return = fiber), (nextEffect = cache);
    else
      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
        cache = nextEffect;
        var sibling = cache.sibling,
          returnFiber = cache.return;
        detachFiberAfterEffects(cache);
        if (cache === fiber) {
          nextEffect = null;
          break a;
        }
        if (null !== sibling) {
          sibling.return = returnFiber;
          nextEffect = sibling;
          break a;
        }
        nextEffect = returnFiber;
      }
  }
}
var DefaultCacheDispatcher = {
    getCacheSignal: function () {
      return readContext(CacheContext).controller.signal;
    },
    getCacheForType: function (resourceType) {
      var cache = readContext(CacheContext),
        cacheForType = cache.data.get(resourceType);
      void 0 === cacheForType &&
        ((cacheForType = resourceType()),
        cache.data.set(resourceType, cacheForType));
      return cacheForType;
    }
  },
  ceil = Math.ceil,
  PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
  ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher,
  ReactCurrentCache = ReactSharedInternals.ReactCurrentCache,
  ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner,
  ReactCurrentBatchConfig = ReactSharedInternals.ReactCurrentBatchConfig,
  executionContext = 0,
  workInProgressRoot = null,
  workInProgress = null,
  workInProgressRootRenderLanes = 0,
  workInProgressSuspendedReason = 0,
  workInProgressThrownValue = null,
  workInProgressRootDidAttachPingListener = !1,
  renderLanes = 0,
  workInProgressRootExitStatus = 0,
  workInProgressRootFatalError = null,
  workInProgressRootSkippedLanes = 0,
  workInProgressRootInterleavedUpdatedLanes = 0,
  workInProgressRootPingedLanes = 0,
  workInProgressRootConcurrentErrors = null,
  workInProgressRootRecoverableErrors = null,
  globalMostRecentFallbackTime = 0,
  workInProgressRootRenderTargetTime = Infinity,
  workInProgressTransitions = null,
  hasUncaughtError = !1,
  firstUncaughtError = null,
  legacyErrorBoundariesThatAlreadyFailed = null,
  rootDoesHavePassiveEffects = !1,
  rootWithPendingPassiveEffects = null,
  pendingPassiveEffectsLanes = 0,
  pendingPassiveProfilerEffects = [],
  pendingPassiveEffectsRemainingLanes = 0,
  pendingPassiveTransitions = null,
  nestedUpdateCount = 0,
  rootWithNestedUpdates = null,
  currentEventTime = -1,
  currentEventTransitionLane = 0;
function requestEventTime() {
  return 0 !== (executionContext & 6)
    ? now$1()
    : -1 !== currentEventTime
    ? currentEventTime
    : (currentEventTime = now$1());
}
function requestUpdateLane(fiber) {
  if (0 === (fiber.mode & 1)) return 2;
  if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
    return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
  if (null !== ReactCurrentBatchConfig$1.transition)
    return (
      0 === currentEventTransitionLane &&
        (currentEventTransitionLane = claimNextTransitionLane()),
      currentEventTransitionLane
    );
  fiber = currentUpdatePriority;
  return 0 !== fiber ? fiber : 32;
}
function scheduleUpdateOnFiber(root, fiber, lane, eventTime) {
  2 === workInProgressSuspendedReason &&
    root === workInProgressRoot &&
    (prepareFreshStack(root, 0),
    markRootSuspended(root, workInProgressRootRenderLanes));
  markRootUpdated(root, lane, eventTime);
  if (0 === (executionContext & 2) || root !== workInProgressRoot)
    root === workInProgressRoot &&
      (0 === (executionContext & 2) &&
        (workInProgressRootInterleavedUpdatedLanes |= lane),
      4 === workInProgressRootExitStatus &&
        markRootSuspended(root, workInProgressRootRenderLanes)),
      ensureRootIsScheduled(root, eventTime),
      2 === lane &&
        0 === executionContext &&
        0 === (fiber.mode & 1) &&
        ((workInProgressRootRenderTargetTime = now$1() + 500),
        includesLegacySyncCallbacks && flushSyncCallbacks());
}
function ensureRootIsScheduled(root, currentTime) {
  for (
    var existingCallbackNode = root.callbackNode,
      suspendedLanes = root.suspendedLanes,
      pingedLanes = root.pingedLanes,
      expirationTimes = root.expirationTimes,
      lanes = root.pendingLanes & -125829121;
    0 < lanes;

  ) {
    var index$3 = 31 - clz32(lanes),
      lane = 1 << index$3,
      expirationTime = expirationTimes[index$3];
    if (-1 === expirationTime) {
      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
        expirationTimes[index$3] = computeExpirationTime(lane, currentTime);
    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
    lanes &= ~lane;
  }
  suspendedLanes = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes : 0
  );
  if (0 === suspendedLanes)
    null !== existingCallbackNode && cancelCallback$1(existingCallbackNode),
      (root.callbackNode = null),
      (root.callbackPriority = 0);
  else if (
    ((currentTime = suspendedLanes & -suspendedLanes),
    root.callbackPriority !== currentTime)
  ) {
    null != existingCallbackNode && cancelCallback$1(existingCallbackNode);
    if (0 !== (currentTime & 3))
      0 === root.tag
        ? ((existingCallbackNode = performSyncWorkOnRoot.bind(null, root)),
          (includesLegacySyncCallbacks = !0),
          null === syncQueue
            ? (syncQueue = [existingCallbackNode])
            : syncQueue.push(existingCallbackNode))
        : ((existingCallbackNode = performSyncWorkOnRoot.bind(null, root)),
          null === syncQueue
            ? (syncQueue = [existingCallbackNode])
            : syncQueue.push(existingCallbackNode)),
        scheduleCallback$2(ImmediatePriority, flushSyncCallbacks),
        (existingCallbackNode = null);
    else {
      switch (lanesToEventPriority(suspendedLanes)) {
        case 2:
          existingCallbackNode = ImmediatePriority;
          break;
        case 8:
          existingCallbackNode = UserBlockingPriority;
          break;
        case 32:
          existingCallbackNode = NormalPriority$1;
          break;
        case 536870912:
          existingCallbackNode = IdlePriority;
          break;
        default:
          existingCallbackNode = NormalPriority$1;
      }
      existingCallbackNode = scheduleCallback(
        existingCallbackNode,
        performConcurrentWorkOnRoot.bind(null, root)
      );
    }
    root.callbackPriority = currentTime;
    root.callbackNode = existingCallbackNode;
  }
}
function performConcurrentWorkOnRoot(root, didTimeout) {
  nestedUpdateScheduled = currentUpdateIsNested = !1;
  currentEventTime = -1;
  currentEventTransitionLane = 0;
  if (0 !== (executionContext & 6))
    throw Error("Should not already be working.");
  var originalCallbackNode = root.callbackNode;
  if (flushPassiveEffects() && root.callbackNode !== originalCallbackNode)
    return null;
  var lanes = getNextLanes(
    root,
    root === workInProgressRoot ? workInProgressRootRenderLanes : 0
  );
  if (0 === lanes) return null;
  didTimeout =
    includesBlockingLane(root, lanes) ||
    0 !== (lanes & root.expiredLanes) ||
    didTimeout
      ? renderRootSync(root, lanes)
      : renderRootConcurrent(root, lanes);
  if (0 !== didTimeout) {
    if (2 === didTimeout) {
      var originallyAttemptedLanes = lanes,
        errorRetryLanes = getLanesToRetrySynchronouslyOnError(
          root,
          originallyAttemptedLanes
        );
      0 !== errorRetryLanes &&
        ((lanes = errorRetryLanes),
        (didTimeout = recoverFromConcurrentError(
          root,
          originallyAttemptedLanes,
          errorRetryLanes
        )));
    }
    if (1 === didTimeout)
      throw (
        ((originalCallbackNode = workInProgressRootFatalError),
        prepareFreshStack(root, 0),
        markRootSuspended(root, lanes),
        ensureRootIsScheduled(root, now$1()),
        originalCallbackNode)
      );
    if (6 === didTimeout) markRootSuspended(root, lanes);
    else {
      errorRetryLanes = !includesBlockingLane(root, lanes);
      originallyAttemptedLanes = root.current.alternate;
      if (
        errorRetryLanes &&
        !isRenderConsistentWithExternalStores(originallyAttemptedLanes)
      ) {
        didTimeout = renderRootSync(root, lanes);
        if (2 === didTimeout) {
          errorRetryLanes = lanes;
          var errorRetryLanes$117 = getLanesToRetrySynchronouslyOnError(
            root,
            errorRetryLanes
          );
          0 !== errorRetryLanes$117 &&
            ((lanes = errorRetryLanes$117),
            (didTimeout = recoverFromConcurrentError(
              root,
              errorRetryLanes,
              errorRetryLanes$117
            )));
        }
        if (1 === didTimeout)
          throw (
            ((originalCallbackNode = workInProgressRootFatalError),
            prepareFreshStack(root, 0),
            markRootSuspended(root, lanes),
            ensureRootIsScheduled(root, now$1()),
            originalCallbackNode)
          );
      }
      root.finishedWork = originallyAttemptedLanes;
      root.finishedLanes = lanes;
      switch (didTimeout) {
        case 0:
        case 1:
          throw Error("Root did not complete. This is a bug in React.");
        case 2:
          commitRoot(
            root,
            workInProgressRootRecoverableErrors,
            workInProgressTransitions
          );
          break;
        case 3:
          markRootSuspended(root, lanes);
          if (
            (lanes & 125829120) === lanes &&
            ((lanes = globalMostRecentFallbackTime + 500 - now$1()), 10 < lanes)
          ) {
            if (0 !== getNextLanes(root, 0)) break;
            root.timeoutHandle = scheduleTimeout(
              commitRoot.bind(
                null,
                root,
                workInProgressRootRecoverableErrors,
                workInProgressTransitions
              ),
              lanes
            );
            break;
          }
          commitRoot(
            root,
            workInProgressRootRecoverableErrors,
            workInProgressTransitions
          );
          break;
        case 4:
          markRootSuspended(root, lanes);
          if ((lanes & 8388480) === lanes) break;
          didTimeout = root.eventTimes;
          for (originallyAttemptedLanes = -1; 0 < lanes; )
            (errorRetryLanes$117 = 31 - clz32(lanes)),
              (errorRetryLanes = 1 << errorRetryLanes$117),
              (errorRetryLanes$117 = didTimeout[errorRetryLanes$117]),
              errorRetryLanes$117 > originallyAttemptedLanes &&
                (originallyAttemptedLanes = errorRetryLanes$117),
              (lanes &= ~errorRetryLanes);
          lanes = originallyAttemptedLanes;
          lanes = now$1() - lanes;
          lanes =
            (120 > lanes
              ? 120
              : 480 > lanes
              ? 480
              : 1080 > lanes
              ? 1080
              : 1920 > lanes
              ? 1920
              : 3e3 > lanes
              ? 3e3
              : 4320 > lanes
              ? 4320
              : 1960 * ceil(lanes / 1960)) - lanes;
          if (10 < lanes) {
            root.timeoutHandle = scheduleTimeout(
              commitRoot.bind(
                null,
                root,
                workInProgressRootRecoverableErrors,
                workInProgressTransitions
              ),
              lanes
            );
            break;
          }
          commitRoot(
            root,
            workInProgressRootRecoverableErrors,
            workInProgressTransitions
          );
          break;
        case 5:
          commitRoot(
            root,
            workInProgressRootRecoverableErrors,
            workInProgressTransitions
          );
          break;
        default:
          throw Error("Unknown root exit status.");
      }
    }
  }
  ensureRootIsScheduled(root, now$1());
  return root.callbackNode === originalCallbackNode
    ? 2 === workInProgressSuspendedReason && workInProgressRoot === root
      ? ((root.callbackPriority = 0), (root.callbackNode = null))
      : performConcurrentWorkOnRoot.bind(null, root)
    : null;
}
function recoverFromConcurrentError(
  root,
  originallyAttemptedLanes,
  errorRetryLanes
) {
  var errorsFromFirstAttempt = workInProgressRootConcurrentErrors,
    JSCompiler_inline_result;
  (JSCompiler_inline_result = root.current.memoizedState.isDehydrated) &&
    (prepareFreshStack(root, errorRetryLanes).flags |= 256);
  errorRetryLanes = renderRootSync(root, errorRetryLanes);
  if (2 !== errorRetryLanes) {
    if (workInProgressRootDidAttachPingListener && !JSCompiler_inline_result)
      return (
        (root.errorRecoveryDisabledLanes |= originallyAttemptedLanes),
        (workInProgressRootInterleavedUpdatedLanes |= originallyAttemptedLanes),
        4
      );
    root = workInProgressRootRecoverableErrors;
    workInProgressRootRecoverableErrors = errorsFromFirstAttempt;
    null !== root && queueRecoverableErrors(root);
  }
  return errorRetryLanes;
}
function queueRecoverableErrors(errors) {
  null === workInProgressRootRecoverableErrors
    ? (workInProgressRootRecoverableErrors = errors)
    : workInProgressRootRecoverableErrors.push.apply(
        workInProgressRootRecoverableErrors,
        errors
      );
}
function isRenderConsistentWithExternalStores(finishedWork) {
  for (var node = finishedWork; ; ) {
    if (node.flags & 16384) {
      var updateQueue = node.updateQueue;
      if (
        null !== updateQueue &&
        ((updateQueue = updateQueue.stores), null !== updateQueue)
      )
        for (var i = 0; i < updateQueue.length; i++) {
          var check = updateQueue[i],
            getSnapshot = check.getSnapshot;
          check = check.value;
          try {
            if (!objectIs(getSnapshot(), check)) return !1;
          } catch (error) {
            return !1;
          }
        }
    }
    updateQueue = node.child;
    if (node.subtreeFlags & 16384 && null !== updateQueue)
      (updateQueue.return = node), (node = updateQueue);
    else {
      if (node === finishedWork) break;
      for (; null === node.sibling; ) {
        if (null === node.return || node.return === finishedWork) return !0;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return !0;
}
function markRootSuspended(root, suspendedLanes) {
  suspendedLanes &= ~workInProgressRootPingedLanes;
  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
  root.suspendedLanes |= suspendedLanes;
  root.pingedLanes &= ~suspendedLanes;
  for (root = root.expirationTimes; 0 < suspendedLanes; ) {
    var index$4 = 31 - clz32(suspendedLanes),
      lane = 1 << index$4;
    root[index$4] = -1;
    suspendedLanes &= ~lane;
  }
}
function performSyncWorkOnRoot(root) {
  currentUpdateIsNested = nestedUpdateScheduled;
  nestedUpdateScheduled = !1;
  if (0 !== (executionContext & 6))
    throw Error("Should not already be working.");
  flushPassiveEffects();
  var lanes = getNextLanes(root, 0);
  if (0 === (lanes & 3)) return ensureRootIsScheduled(root, now$1()), null;
  var exitStatus = renderRootSync(root, lanes);
  if (0 !== root.tag && 2 === exitStatus) {
    var originallyAttemptedLanes = lanes,
      errorRetryLanes = getLanesToRetrySynchronouslyOnError(
        root,
        originallyAttemptedLanes
      );
    0 !== errorRetryLanes &&
      ((lanes = errorRetryLanes),
      (exitStatus = recoverFromConcurrentError(
        root,
        originallyAttemptedLanes,
        errorRetryLanes
      )));
  }
  if (1 === exitStatus)
    throw (
      ((exitStatus = workInProgressRootFatalError),
      prepareFreshStack(root, 0),
      markRootSuspended(root, lanes),
      ensureRootIsScheduled(root, now$1()),
      exitStatus)
    );
  if (6 === exitStatus)
    return (
      markRootSuspended(root, lanes), ensureRootIsScheduled(root, now$1()), null
    );
  root.finishedWork = root.current.alternate;
  root.finishedLanes = lanes;
  commitRoot(
    root,
    workInProgressRootRecoverableErrors,
    workInProgressTransitions
  );
  ensureRootIsScheduled(root, now$1());
  return null;
}
function flushSync(fn) {
  null !== rootWithPendingPassiveEffects &&
    0 === rootWithPendingPassiveEffects.tag &&
    0 === (executionContext & 6) &&
    flushPassiveEffects();
  var prevExecutionContext = executionContext;
  executionContext |= 1;
  var prevTransition = ReactCurrentBatchConfig.transition,
    previousPriority = currentUpdatePriority;
  try {
    if (
      ((ReactCurrentBatchConfig.transition = null),
      (currentUpdatePriority = 2),
      fn)
    )
      return fn();
  } finally {
    (currentUpdatePriority = previousPriority),
      (ReactCurrentBatchConfig.transition = prevTransition),
      (executionContext = prevExecutionContext),
      0 === (executionContext & 6) && flushSyncCallbacks();
  }
}
function resetWorkInProgressStack() {
  if (null !== workInProgress) {
    if (0 === workInProgressSuspendedReason)
      var interruptedWork = workInProgress.return;
    else
      resetContextDependencies(),
        resetHooksOnUnwind(),
        (interruptedWork = workInProgress);
    for (; null !== interruptedWork; )
      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
        (interruptedWork = interruptedWork.return);
    workInProgress = null;
  }
}
function prepareFreshStack(root, lanes) {
  root.finishedWork = null;
  root.finishedLanes = 0;
  var timeoutHandle = root.timeoutHandle;
  -1 !== timeoutHandle &&
    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
  resetWorkInProgressStack();
  workInProgressRoot = root;
  workInProgress = root = createWorkInProgress(root.current, null);
  workInProgressRootRenderLanes = renderLanes = lanes;
  workInProgressSuspendedReason = 0;
  workInProgressThrownValue = null;
  workInProgressRootDidAttachPingListener = !1;
  workInProgressRootExitStatus = 0;
  workInProgressRootFatalError = null;
  workInProgressRootPingedLanes =
    workInProgressRootInterleavedUpdatedLanes =
    workInProgressRootSkippedLanes =
      0;
  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
    null;
  finishQueueingConcurrentUpdates();
  return root;
}
function handleThrow(root, thrownValue) {
  ReactCurrentDispatcher$1.current = ContextOnlyDispatcher;
  ReactCurrentOwner.current = null;
  if (thrownValue === SuspenseException) {
    if (null === suspendedThenable)
      throw Error(
        "Expected a suspended thenable. This is a bug in React. Please file an issue."
      );
    thrownValue = suspendedThenable;
    suspendedThenable = null;
    workInProgressSuspendedReason = shouldAttemptToSuspendUntilDataResolves()
      ? 2
      : 3;
  } else
    workInProgressSuspendedReason =
      thrownValue === SelectiveHydrationException
        ? 6
        : null !== thrownValue &&
          "object" === typeof thrownValue &&
          "function" === typeof thrownValue.then
        ? 4
        : 1;
  workInProgressThrownValue = thrownValue;
  root = workInProgress;
  null === root
    ? ((workInProgressRootExitStatus = 1),
      (workInProgressRootFatalError = thrownValue))
    : root.mode & 2 && stopProfilerTimerIfRunningAndRecordDelta(root, !0);
}
function shouldAttemptToSuspendUntilDataResolves() {
  if (
    0 !== (workInProgressRootSkippedLanes & 268435455) ||
    0 !== (workInProgressRootInterleavedUpdatedLanes & 268435455)
  )
    return !1;
  if (
    (workInProgressRootRenderLanes & 8388480) ===
    workInProgressRootRenderLanes
  )
    return null === shellBoundary;
  var handler = suspenseHandlerStackCursor.current;
  return null !== handler &&
    (workInProgressRootRenderLanes & 125829120) ===
      workInProgressRootRenderLanes
    ? handler === shellBoundary
    : !1;
}
function pushDispatcher() {
  var prevDispatcher = ReactCurrentDispatcher.current;
  ReactCurrentDispatcher.current = ContextOnlyDispatcher;
  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
}
function pushCacheDispatcher() {
  var prevCacheDispatcher = ReactCurrentCache.current;
  ReactCurrentCache.current = DefaultCacheDispatcher;
  return prevCacheDispatcher;
}
function renderDidSuspendDelayIfPossible() {
  workInProgressRootExitStatus = 4;
  null === workInProgressRoot ||
    (0 === (workInProgressRootSkippedLanes & 268435455) &&
      0 === (workInProgressRootInterleavedUpdatedLanes & 268435455)) ||
    markRootSuspended(workInProgressRoot, workInProgressRootRenderLanes);
}
function renderRootSync(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevCacheDispatcher = pushCacheDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
    (workInProgressTransitions = null), prepareFreshStack(root, lanes);
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        lanes = workInProgress;
        var thrownValue = workInProgressThrownValue;
        switch (workInProgressSuspendedReason) {
          case 6:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          default:
            (workInProgressSuspendedReason = 0),
              (workInProgressThrownValue = null),
              unwindSuspendedUnitOfWork(lanes, thrownValue);
        }
      }
      workLoopSync();
      break;
    } catch (thrownValue$120) {
      handleThrow(root, thrownValue$120);
    }
  while (1);
  resetContextDependencies();
  executionContext = prevExecutionContext;
  ReactCurrentDispatcher.current = prevDispatcher;
  ReactCurrentCache.current = prevCacheDispatcher;
  if (null !== workInProgress)
    throw Error(
      "Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."
    );
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopSync() {
  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
}
function renderRootConcurrent(root, lanes) {
  var prevExecutionContext = executionContext;
  executionContext |= 2;
  var prevDispatcher = pushDispatcher(),
    prevCacheDispatcher = pushCacheDispatcher();
  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
    (workInProgressTransitions = null),
      (workInProgressRootRenderTargetTime = now$1() + 500),
      prepareFreshStack(root, lanes);
  a: do
    try {
      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
        lanes = workInProgress;
        var thrownValue = workInProgressThrownValue;
        switch (workInProgressSuspendedReason) {
          case 1:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            unwindSuspendedUnitOfWork(lanes, thrownValue);
            break;
          case 2:
            if (isThenableResolved(thrownValue)) {
              workInProgressSuspendedReason = 0;
              workInProgressThrownValue = null;
              replaySuspendedUnitOfWork(lanes);
              break;
            }
            lanes = function () {
              ensureRootIsScheduled(root, now$1());
            };
            thrownValue.then(lanes, lanes);
            break a;
          case 3:
            workInProgressSuspendedReason = 5;
            break a;
          case 5:
            isThenableResolved(thrownValue)
              ? ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                replaySuspendedUnitOfWork(lanes))
              : ((workInProgressSuspendedReason = 0),
                (workInProgressThrownValue = null),
                unwindSuspendedUnitOfWork(lanes, thrownValue));
            break;
          case 4:
            workInProgressSuspendedReason = 0;
            workInProgressThrownValue = null;
            unwindSuspendedUnitOfWork(lanes, thrownValue);
            break;
          case 6:
            resetWorkInProgressStack();
            workInProgressRootExitStatus = 6;
            break a;
          default:
            throw Error("Unexpected SuspendedReason. This is a bug in React.");
        }
      }
      workLoopConcurrent();
      break;
    } catch (thrownValue$122) {
      handleThrow(root, thrownValue$122);
    }
  while (1);
  resetContextDependencies();
  ReactCurrentDispatcher.current = prevDispatcher;
  ReactCurrentCache.current = prevCacheDispatcher;
  executionContext = prevExecutionContext;
  if (null !== workInProgress) return 0;
  workInProgressRoot = null;
  workInProgressRootRenderLanes = 0;
  finishQueueingConcurrentUpdates();
  return workInProgressRootExitStatus;
}
function workLoopConcurrent() {
  for (; null !== workInProgress && !shouldYield(); )
    performUnitOfWork(workInProgress);
}
function performUnitOfWork(unitOfWork) {
  var current = unitOfWork.alternate;
  0 !== (unitOfWork.mode & 2)
    ? (startProfilerTimer(unitOfWork),
      (current = beginWork(current, unitOfWork, renderLanes)),
      stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, !0))
    : (current = beginWork(current, unitOfWork, renderLanes));
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === current
    ? completeUnitOfWork(unitOfWork)
    : (workInProgress = current);
  ReactCurrentOwner.current = null;
}
function replaySuspendedUnitOfWork(unitOfWork) {
  var current = unitOfWork.alternate,
    isProfilingMode = 0 !== (unitOfWork.mode & 2);
  isProfilingMode && startProfilerTimer(unitOfWork);
  switch (unitOfWork.tag) {
    case 2:
      unitOfWork.tag = 0;
    case 0:
    case 11:
      var Component = unitOfWork.type,
        unresolvedProps = unitOfWork.pendingProps;
      unresolvedProps =
        unitOfWork.elementType === Component
          ? unresolvedProps
          : resolveDefaultProps(Component, unresolvedProps);
      current = replayFunctionComponent(
        current,
        unitOfWork,
        unresolvedProps,
        Component,
        workInProgressRootRenderLanes
      );
      break;
    case 15:
      current = replayFunctionComponent(
        current,
        unitOfWork,
        unitOfWork.pendingProps,
        unitOfWork.type,
        workInProgressRootRenderLanes
      );
      break;
    default:
      resetContextDependencies(),
        resetHooksOnUnwind(),
        unwindInterruptedWork(current, unitOfWork),
        (unitOfWork = workInProgress =
          resetWorkInProgress(unitOfWork, renderLanes)),
        (current = beginWork(current, unitOfWork, renderLanes));
  }
  isProfilingMode && stopProfilerTimerIfRunningAndRecordDelta(unitOfWork, !0);
  unitOfWork.memoizedProps = unitOfWork.pendingProps;
  null === current
    ? completeUnitOfWork(unitOfWork)
    : (workInProgress = current);
  ReactCurrentOwner.current = null;
}
function unwindSuspendedUnitOfWork(unitOfWork, thrownValue) {
  resetContextDependencies();
  resetHooksOnUnwind();
  var returnFiber = unitOfWork.return;
  if (null === returnFiber || null === workInProgressRoot)
    (workInProgressRootExitStatus = 1),
      (workInProgressRootFatalError = thrownValue),
      (workInProgress = null);
  else {
    try {
      a: {
        var root = workInProgressRoot,
          value = thrownValue;
        thrownValue = workInProgressRootRenderLanes;
        unitOfWork.flags |= 32768;
        if (
          null !== value &&
          "object" === typeof value &&
          "function" === typeof value.then
        ) {
          var wakeable = value,
            tag = unitOfWork.tag;
          if (
            0 === (unitOfWork.mode & 1) &&
            (0 === tag || 11 === tag || 15 === tag)
          ) {
            var currentSource = unitOfWork.alternate;
            currentSource
              ? ((unitOfWork.updateQueue = currentSource.updateQueue),
                (unitOfWork.memoizedState = currentSource.memoizedState),
                (unitOfWork.lanes = currentSource.lanes))
              : ((unitOfWork.updateQueue = null),
                (unitOfWork.memoizedState = null));
          }
          var suspenseBoundary = suspenseHandlerStackCursor.current;
          if (null !== suspenseBoundary) {
            switch (suspenseBoundary.tag) {
              case 13:
                unitOfWork.mode & 1 &&
                  (null === shellBoundary
                    ? renderDidSuspendDelayIfPossible()
                    : null === suspenseBoundary.alternate &&
                      0 === workInProgressRootExitStatus &&
                      (workInProgressRootExitStatus = 3));
                suspenseBoundary.flags &= -257;
                if (0 === (suspenseBoundary.mode & 1))
                  if (suspenseBoundary === returnFiber)
                    suspenseBoundary.flags |= 65536;
                  else {
                    suspenseBoundary.flags |= 128;
                    unitOfWork.flags |= 131072;
                    unitOfWork.flags &= -52805;
                    if (1 === unitOfWork.tag)
                      if (null === unitOfWork.alternate) unitOfWork.tag = 17;
                      else {
                        var update = createUpdate(-1, 2);
                        update.tag = 2;
                        enqueueUpdate(unitOfWork, update, 2);
                      }
                    unitOfWork.lanes |= 2;
                  }
                else
                  (suspenseBoundary.flags |= 65536),
                    (suspenseBoundary.lanes = thrownValue);
                var wakeables = suspenseBoundary.updateQueue;
                null === wakeables
                  ? (suspenseBoundary.updateQueue = new Set([wakeable]))
                  : wakeables.add(wakeable);
                break;
              case 22:
                if (suspenseBoundary.mode & 1) {
                  suspenseBoundary.flags |= 65536;
                  var offscreenQueue = suspenseBoundary.updateQueue;
                  if (null === offscreenQueue) {
                    var newOffscreenQueue = {
                      transitions: null,
                      markerInstances: null,
                      wakeables: new Set([wakeable])
                    };
                    suspenseBoundary.updateQueue = newOffscreenQueue;
                  } else {
                    var wakeables$29 = offscreenQueue.wakeables;
                    null === wakeables$29
                      ? (offscreenQueue.wakeables = new Set([wakeable]))
                      : wakeables$29.add(wakeable);
                  }
                  break;
                }
              default:
                throw Error(
                  "Unexpected Suspense handler tag (" +
                    suspenseBoundary.tag +
                    "). This is a bug in React."
                );
            }
            suspenseBoundary.mode & 1 &&
              attachPingListener(root, wakeable, thrownValue);
            break a;
          } else if (1 === root.tag) {
            attachPingListener(root, wakeable, thrownValue);
            renderDidSuspendDelayIfPossible();
            break a;
          } else
            value = Error(
              "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
            );
        }
        root = value = createCapturedValueAtFiber(value, unitOfWork);
        4 !== workInProgressRootExitStatus &&
          (workInProgressRootExitStatus = 2);
        null === workInProgressRootConcurrentErrors
          ? (workInProgressRootConcurrentErrors = [root])
          : workInProgressRootConcurrentErrors.push(root);
        root = returnFiber;
        do {
          switch (root.tag) {
            case 3:
              var errorInfo = value;
              root.flags |= 65536;
              thrownValue &= -thrownValue;
              root.lanes |= thrownValue;
              var update$jscomp$0 = createRootErrorUpdate(
                root,
                errorInfo,
                thrownValue
              );
              enqueueCapturedUpdate(root, update$jscomp$0);
              break a;
            case 1:
              tag = value;
              var ctor = root.type,
                instance = root.stateNode;
              if (
                0 === (root.flags & 128) &&
                ("function" === typeof ctor.getDerivedStateFromError ||
                  (null !== instance &&
                    "function" === typeof instance.componentDidCatch &&
                    (null === legacyErrorBoundariesThatAlreadyFailed ||
                      !legacyErrorBoundariesThatAlreadyFailed.has(instance))))
              ) {
                root.flags |= 65536;
                update$jscomp$0 = thrownValue & -thrownValue;
                root.lanes |= update$jscomp$0;
                errorInfo = createClassErrorUpdate(root, tag, update$jscomp$0);
                enqueueCapturedUpdate(root, errorInfo);
                break a;
              }
          }
          root = root.return;
        } while (null !== root);
      }
    } catch (error) {
      throw ((workInProgress = returnFiber), error);
    }
    completeUnitOfWork(unitOfWork);
  }
}
function completeUnitOfWork(unitOfWork) {
  var completedWork = unitOfWork;
  do {
    var current = completedWork.alternate;
    unitOfWork = completedWork.return;
    if (0 === (completedWork.flags & 32768)) {
      if (
        (0 === (completedWork.mode & 2)
          ? (current = completeWork(current, completedWork, renderLanes))
          : (startProfilerTimer(completedWork),
            (current = completeWork(current, completedWork, renderLanes)),
            stopProfilerTimerIfRunningAndRecordDelta(completedWork, !1)),
        null !== current)
      ) {
        workInProgress = current;
        return;
      }
    } else {
      current = unwindWork(current, completedWork);
      if (null !== current) {
        current.flags &= 16383;
        workInProgress = current;
        return;
      }
      if (0 !== (completedWork.mode & 2)) {
        stopProfilerTimerIfRunningAndRecordDelta(completedWork, !1);
        current = completedWork.actualDuration;
        for (var child = completedWork.child; null !== child; )
          (current += child.actualDuration), (child = child.sibling);
        completedWork.actualDuration = current;
      }
      if (null !== unitOfWork)
        (unitOfWork.flags |= 32768),
          (unitOfWork.subtreeFlags = 0),
          (unitOfWork.deletions = null);
      else {
        workInProgressRootExitStatus = 6;
        workInProgress = null;
        return;
      }
    }
    completedWork = completedWork.sibling;
    if (null !== completedWork) {
      workInProgress = completedWork;
      return;
    }
    workInProgress = completedWork = unitOfWork;
  } while (null !== completedWork);
  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
}
function commitRoot(root, recoverableErrors, transitions) {
  var previousUpdateLanePriority = currentUpdatePriority,
    prevTransition = ReactCurrentBatchConfig.transition;
  try {
    (ReactCurrentBatchConfig.transition = null),
      (currentUpdatePriority = 2),
      commitRootImpl(
        root,
        recoverableErrors,
        transitions,
        previousUpdateLanePriority
      );
  } finally {
    (ReactCurrentBatchConfig.transition = prevTransition),
      (currentUpdatePriority = previousUpdateLanePriority);
  }
  return null;
}
function commitRootImpl(
  root,
  recoverableErrors,
  transitions,
  renderPriorityLevel
) {
  do flushPassiveEffects();
  while (null !== rootWithPendingPassiveEffects);
  if (0 !== (executionContext & 6))
    throw Error("Should not already be working.");
  var finishedWork = root.finishedWork,
    lanes = root.finishedLanes;
  if (null === finishedWork) return null;
  root.finishedWork = null;
  root.finishedLanes = 0;
  if (finishedWork === root.current)
    throw Error(
      "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
    );
  root.callbackNode = null;
  root.callbackPriority = 0;
  var remainingLanes = finishedWork.lanes | finishedWork.childLanes;
  remainingLanes |= concurrentlyUpdatedLanes;
  markRootFinished(root, remainingLanes);
  root === workInProgressRoot &&
    ((workInProgress = workInProgressRoot = null),
    (workInProgressRootRenderLanes = 0));
  (0 === (finishedWork.subtreeFlags & 10256) &&
    0 === (finishedWork.flags & 10256)) ||
    rootDoesHavePassiveEffects ||
    ((rootDoesHavePassiveEffects = !0),
    (pendingPassiveEffectsRemainingLanes = remainingLanes),
    (pendingPassiveTransitions = transitions),
    scheduleCallback(NormalPriority$1, function () {
      flushPassiveEffects();
      return null;
    }));
  transitions = 0 !== (finishedWork.flags & 15990);
  if (0 !== (finishedWork.subtreeFlags & 15990) || transitions) {
    transitions = ReactCurrentBatchConfig.transition;
    ReactCurrentBatchConfig.transition = null;
    var previousPriority = currentUpdatePriority;
    currentUpdatePriority = 2;
    var prevExecutionContext = executionContext;
    executionContext |= 4;
    ReactCurrentOwner.current = null;
    commitBeforeMutationEffects(root, finishedWork);
    commitTime = now();
    commitMutationEffectsOnFiber(finishedWork, root);
    root.current = finishedWork;
    commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
    requestPaint();
    executionContext = prevExecutionContext;
    currentUpdatePriority = previousPriority;
    ReactCurrentBatchConfig.transition = transitions;
  } else (root.current = finishedWork), (commitTime = now());
  rootDoesHavePassiveEffects
    ? ((rootDoesHavePassiveEffects = !1),
      (rootWithPendingPassiveEffects = root),
      (pendingPassiveEffectsLanes = lanes))
    : releaseRootPooledCache(root, remainingLanes);
  remainingLanes = root.pendingLanes;
  0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
  onCommitRoot(finishedWork.stateNode, renderPriorityLevel);
  ensureRootIsScheduled(root, now$1());
  if (null !== recoverableErrors)
    for (
      renderPriorityLevel = root.onRecoverableError, finishedWork = 0;
      finishedWork < recoverableErrors.length;
      finishedWork++
    )
      (lanes = recoverableErrors[finishedWork]),
        (remainingLanes = {
          digest: lanes.digest,
          componentStack: lanes.stack
        }),
        renderPriorityLevel(lanes.value, remainingLanes);
  if (hasUncaughtError)
    throw (
      ((hasUncaughtError = !1),
      (root = firstUncaughtError),
      (firstUncaughtError = null),
      root)
    );
  0 !== (pendingPassiveEffectsLanes & 3) &&
    0 !== root.tag &&
    flushPassiveEffects();
  remainingLanes = root.pendingLanes;
  0 !== (remainingLanes & 3)
    ? ((nestedUpdateScheduled = !0),
      root === rootWithNestedUpdates
        ? nestedUpdateCount++
        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root)))
    : (nestedUpdateCount = 0);
  flushSyncCallbacks();
  return null;
}
function releaseRootPooledCache(root, remainingLanes) {
  0 === (root.pooledCacheLanes &= remainingLanes) &&
    ((remainingLanes = root.pooledCache),
    null != remainingLanes &&
      ((root.pooledCache = null), releaseCache(remainingLanes)));
}
function flushPassiveEffects() {
  if (null !== rootWithPendingPassiveEffects) {
    var root = rootWithPendingPassiveEffects,
      remainingLanes = pendingPassiveEffectsRemainingLanes;
    pendingPassiveEffectsRemainingLanes = 0;
    var renderPriority = lanesToEventPriority(pendingPassiveEffectsLanes),
      priority = 32 > renderPriority ? 32 : renderPriority;
    renderPriority = ReactCurrentBatchConfig.transition;
    var previousPriority = currentUpdatePriority;
    try {
      ReactCurrentBatchConfig.transition = null;
      currentUpdatePriority = priority;
      if (null === rootWithPendingPassiveEffects)
        var JSCompiler_inline_result = !1;
      else {
        var transitions = pendingPassiveTransitions;
        pendingPassiveTransitions = null;
        priority = rootWithPendingPassiveEffects;
        var lanes = pendingPassiveEffectsLanes;
        rootWithPendingPassiveEffects = null;
        pendingPassiveEffectsLanes = 0;
        if (0 !== (executionContext & 6))
          throw Error("Cannot flush passive effects while already rendering.");
        var prevExecutionContext = executionContext;
        executionContext |= 4;
        commitPassiveUnmountOnFiber(priority.current);
        commitPassiveMountOnFiber(
          priority,
          priority.current,
          lanes,
          transitions
        );
        transitions = pendingPassiveProfilerEffects;
        pendingPassiveProfilerEffects = [];
        for (lanes = 0; lanes < transitions.length; lanes++) {
          var finishedWork = transitions[lanes];
          if (executionContext & 4 && 0 !== (finishedWork.flags & 4))
            switch (finishedWork.tag) {
              case 12:
                var passiveEffectDuration =
                    finishedWork.stateNode.passiveEffectDuration,
                  _finishedWork$memoize = finishedWork.memoizedProps,
                  id = _finishedWork$memoize.id,
                  onPostCommit = _finishedWork$memoize.onPostCommit,
                  commitTime$86 = commitTime,
                  phase = null === finishedWork.alternate ? "mount" : "update";
                currentUpdateIsNested && (phase = "nested-update");
                "function" === typeof onPostCommit &&
                  onPostCommit(id, phase, passiveEffectDuration, commitTime$86);
                var parentFiber = finishedWork.return;
                b: for (; null !== parentFiber; ) {
                  switch (parentFiber.tag) {
                    case 3:
                      parentFiber.stateNode.passiveEffectDuration +=
                        passiveEffectDuration;
                      break b;
                    case 12:
                      parentFiber.stateNode.passiveEffectDuration +=
                        passiveEffectDuration;
                      break b;
                  }
                  parentFiber = parentFiber.return;
                }
            }
        }
        executionContext = prevExecutionContext;
        flushSyncCallbacks();
        if (
          injectedHook &&
          "function" === typeof injectedHook.onPostCommitFiberRoot
        )
          try {
            injectedHook.onPostCommitFiberRoot(rendererID, priority);
          } catch (err) {}
        var stateNode = priority.current.stateNode;
        stateNode.effectDuration = 0;
        stateNode.passiveEffectDuration = 0;
        JSCompiler_inline_result = !0;
      }
      return JSCompiler_inline_result;
    } finally {
      (currentUpdatePriority = previousPriority),
        (ReactCurrentBatchConfig.transition = renderPriority),
        releaseRootPooledCache(root, remainingLanes);
    }
  }
  return !1;
}
function enqueuePendingPassiveProfilerEffect(fiber) {
  pendingPassiveProfilerEffects.push(fiber);
  rootDoesHavePassiveEffects ||
    ((rootDoesHavePassiveEffects = !0),
    scheduleCallback(NormalPriority$1, function () {
      flushPassiveEffects();
      return null;
    }));
}
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
  sourceFiber = createRootErrorUpdate(rootFiber, sourceFiber, 2);
  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
  sourceFiber = requestEventTime();
  null !== rootFiber &&
    (markRootUpdated(rootFiber, 2, sourceFiber),
    ensureRootIsScheduled(rootFiber, sourceFiber));
}
function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
  if (3 === sourceFiber.tag)
    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
  else
    for (
      nearestMountedAncestor = sourceFiber.return;
      null !== nearestMountedAncestor;

    ) {
      if (3 === nearestMountedAncestor.tag) {
        captureCommitPhaseErrorOnRoot(
          nearestMountedAncestor,
          sourceFiber,
          error
        );
        break;
      } else if (1 === nearestMountedAncestor.tag) {
        var instance = nearestMountedAncestor.stateNode;
        if (
          "function" ===
            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
          ("function" === typeof instance.componentDidCatch &&
            (null === legacyErrorBoundariesThatAlreadyFailed ||
              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
        ) {
          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
          sourceFiber = createClassErrorUpdate(
            nearestMountedAncestor,
            sourceFiber,
            2
          );
          nearestMountedAncestor = enqueueUpdate(
            nearestMountedAncestor,
            sourceFiber,
            2
          );
          sourceFiber = requestEventTime();
          null !== nearestMountedAncestor &&
            (markRootUpdated(nearestMountedAncestor, 2, sourceFiber),
            ensureRootIsScheduled(nearestMountedAncestor, sourceFiber));
          break;
        }
      }
      nearestMountedAncestor = nearestMountedAncestor.return;
    }
}
function attachPingListener(root, wakeable, lanes) {
  var pingCache = root.pingCache;
  if (null === pingCache) {
    pingCache = root.pingCache = new PossiblyWeakMap();
    var threadIDs = new Set();
    pingCache.set(wakeable, threadIDs);
  } else
    (threadIDs = pingCache.get(wakeable)),
      void 0 === threadIDs &&
        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
  threadIDs.has(lanes) ||
    ((workInProgressRootDidAttachPingListener = !0),
    threadIDs.add(lanes),
    (root = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
    wakeable.then(root, root));
}
function pingSuspendedRoot(root, wakeable, pingedLanes) {
  var pingCache = root.pingCache;
  null !== pingCache && pingCache.delete(wakeable);
  wakeable = requestEventTime();
  root.pingedLanes |= root.suspendedLanes & pingedLanes;
  workInProgressRoot === root &&
    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
    (4 === workInProgressRootExitStatus ||
    (3 === workInProgressRootExitStatus &&
      (workInProgressRootRenderLanes & 125829120) ===
        workInProgressRootRenderLanes &&
      500 > now$1() - globalMostRecentFallbackTime)
      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
      : (workInProgressRootPingedLanes |= pingedLanes));
  ensureRootIsScheduled(root, wakeable);
}
function retryTimedOutBoundary(boundaryFiber, retryLane) {
  0 === retryLane &&
    (0 === (boundaryFiber.mode & 1)
      ? (retryLane = 2)
      : ((retryLane = nextRetryLane),
        (nextRetryLane <<= 1),
        0 === (nextRetryLane & 125829120) && (nextRetryLane = 8388608)));
  var eventTime = requestEventTime();
  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
  null !== boundaryFiber &&
    (markRootUpdated(boundaryFiber, retryLane, eventTime),
    ensureRootIsScheduled(boundaryFiber, eventTime));
}
function retryDehydratedSuspenseBoundary(boundaryFiber) {
  var suspenseState = boundaryFiber.memoizedState,
    retryLane = 0;
  null !== suspenseState && (retryLane = suspenseState.retryLane);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
function resolveRetryWakeable(boundaryFiber, wakeable) {
  var retryLane = 0;
  switch (boundaryFiber.tag) {
    case 13:
      var retryCache = boundaryFiber.stateNode;
      var suspenseState = boundaryFiber.memoizedState;
      null !== suspenseState && (retryLane = suspenseState.retryLane);
      break;
    case 19:
      retryCache = boundaryFiber.stateNode;
      break;
    case 22:
      retryCache = boundaryFiber.stateNode._retryCache;
      break;
    default:
      throw Error(
        "Pinged unknown suspense boundary type. This is probably a bug in React."
      );
  }
  null !== retryCache && retryCache.delete(wakeable);
  retryTimedOutBoundary(boundaryFiber, retryLane);
}
var beginWork;
beginWork = function (current, workInProgress, renderLanes) {
  if (null !== current)
    if (
      current.memoizedProps !== workInProgress.pendingProps ||
      didPerformWorkStackCursor.current
    )
      didReceiveUpdate = !0;
    else {
      if (
        0 === (current.lanes & renderLanes) &&
        0 === (workInProgress.flags & 128)
      )
        return (
          (didReceiveUpdate = !1),
          attemptEarlyBailoutIfNoScheduledUpdate(
            current,
            workInProgress,
            renderLanes
          )
        );
      didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
    }
  else didReceiveUpdate = !1;
  workInProgress.lanes = 0;
  switch (workInProgress.tag) {
    case 2:
      var Component = workInProgress.type;
      resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress);
      current = workInProgress.pendingProps;
      var context = getMaskedContext(
        workInProgress,
        contextStackCursor$1.current
      );
      prepareToReadContext(workInProgress, renderLanes);
      context = renderWithHooks(
        null,
        workInProgress,
        Component,
        current,
        context,
        renderLanes
      );
      workInProgress.flags |= 1;
      if (
        "object" === typeof context &&
        null !== context &&
        "function" === typeof context.render &&
        void 0 === context.$$typeof
      ) {
        workInProgress.tag = 1;
        workInProgress.memoizedState = null;
        workInProgress.updateQueue = null;
        if (isContextProvider(Component)) {
          var hasContext = !0;
          pushContextProvider(workInProgress);
        } else hasContext = !1;
        workInProgress.memoizedState =
          null !== context.state && void 0 !== context.state
            ? context.state
            : null;
        initializeUpdateQueue(workInProgress);
        context.updater = classComponentUpdater;
        workInProgress.stateNode = context;
        context._reactInternals = workInProgress;
        mountClassInstance(workInProgress, Component, current, renderLanes);
        workInProgress = finishClassComponent(
          null,
          workInProgress,
          Component,
          !0,
          hasContext,
          renderLanes
        );
      } else
        (workInProgress.tag = 0),
          reconcileChildren(null, workInProgress, context, renderLanes),
          (workInProgress = workInProgress.child);
      return workInProgress;
    case 16:
      Component = workInProgress.elementType;
      a: {
        resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress);
        current = workInProgress.pendingProps;
        context = Component._init;
        Component = context(Component._payload);
        workInProgress.type = Component;
        context = workInProgress.tag = resolveLazyComponentTag(Component);
        current = resolveDefaultProps(Component, current);
        switch (context) {
          case 0:
            workInProgress = updateFunctionComponent(
              null,
              workInProgress,
              Component,
              current,
              renderLanes
            );
            break a;
          case 1:
            workInProgress = updateClassComponent(
              null,
              workInProgress,
              Component,
              current,
              renderLanes
            );
            break a;
          case 11:
            workInProgress = updateForwardRef(
              null,
              workInProgress,
              Component,
              current,
              renderLanes
            );
            break a;
          case 14:
            workInProgress = updateMemoComponent(
              null,
              workInProgress,
              Component,
              resolveDefaultProps(Component.type, current),
              renderLanes
            );
            break a;
        }
        throw Error(
          "Element type is invalid. Received a promise that resolves to: " +
            Component +
            ". Lazy element type must resolve to a class or function."
        );
      }
      return workInProgress;
    case 0:
      return (
        (Component = workInProgress.type),
        (context = workInProgress.pendingProps),
        (context =
          workInProgress.elementType === Component
            ? context
            : resolveDefaultProps(Component, context)),
        updateFunctionComponent(
          current,
          workInProgress,
          Component,
          context,
          renderLanes
        )
      );
    case 1:
      return (
        (Component = workInProgress.type),
        (context = workInProgress.pendingProps),
        (context =
          workInProgress.elementType === Component
            ? context
            : resolveDefaultProps(Component, context)),
        updateClassComponent(
          current,
          workInProgress,
          Component,
          context,
          renderLanes
        )
      );
    case 3:
      pushHostRootContext(workInProgress);
      if (null === current)
        throw Error("Should have a current fiber. This is a bug in React.");
      hasContext = workInProgress.pendingProps;
      context = workInProgress.memoizedState;
      Component = context.element;
      cloneUpdateQueue(current, workInProgress);
      processUpdateQueue(workInProgress, hasContext, null, renderLanes);
      hasContext = workInProgress.memoizedState;
      var nextCache = hasContext.cache;
      pushProvider(workInProgress, CacheContext, nextCache);
      nextCache !== context.cache &&
        propagateContextChange(workInProgress, CacheContext, renderLanes);
      context = hasContext.element;
      context === Component
        ? (workInProgress = bailoutOnAlreadyFinishedWork(
            current,
            workInProgress,
            renderLanes
          ))
        : (reconcileChildren(current, workInProgress, context, renderLanes),
          (workInProgress = workInProgress.child));
      return workInProgress;
    case 26:
    case 27:
    case 5:
      return (
        pushHostContext(workInProgress),
        (Component = workInProgress.pendingProps.children),
        markRef$1(current, workInProgress),
        reconcileChildren(current, workInProgress, Component, renderLanes),
        workInProgress.child
      );
    case 6:
      return null;
    case 13:
      return updateSuspenseComponent(current, workInProgress, renderLanes);
    case 4:
      return (
        pushHostContainer(
          workInProgress,
          workInProgress.stateNode.containerInfo
        ),
        (Component = workInProgress.pendingProps),
        null === current
          ? (workInProgress.child = reconcileChildFibers(
              workInProgress,
              null,
              Component,
              renderLanes
            ))
          : reconcileChildren(current, workInProgress, Component, renderLanes),
        workInProgress.child
      );
    case 11:
      return (
        (Component = workInProgress.type),
        (context = workInProgress.pendingProps),
        (context =
          workInProgress.elementType === Component
            ? context
            : resolveDefaultProps(Component, context)),
        updateForwardRef(
          current,
          workInProgress,
          Component,
          context,
          renderLanes
        )
      );
    case 7:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps,
          renderLanes
        ),
        workInProgress.child
      );
    case 8:
      return (
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 12:
      return (
        (workInProgress.flags |= 4),
        (Component = workInProgress.stateNode),
        (Component.effectDuration = 0),
        (Component.passiveEffectDuration = 0),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
    case 10:
      a: {
        Component = workInProgress.type._context;
        context = workInProgress.pendingProps;
        hasContext = workInProgress.memoizedProps;
        nextCache = context.value;
        pushProvider(workInProgress, Component, nextCache);
        if (null !== hasContext)
          if (objectIs(hasContext.value, nextCache)) {
            if (
              hasContext.children === context.children &&
              !didPerformWorkStackCursor.current
            ) {
              workInProgress = bailoutOnAlreadyFinishedWork(
                current,
                workInProgress,
                renderLanes
              );
              break a;
            }
          } else propagateContextChange(workInProgress, Component, renderLanes);
        reconcileChildren(
          current,
          workInProgress,
          context.children,
          renderLanes
        );
        workInProgress = workInProgress.child;
      }
      return workInProgress;
    case 9:
      return (
        (context = workInProgress.type),
        (Component = workInProgress.pendingProps.children),
        prepareToReadContext(workInProgress, renderLanes),
        (context = readContext(context)),
        (Component = Component(context)),
        (workInProgress.flags |= 1),
        reconcileChildren(current, workInProgress, Component, renderLanes),
        workInProgress.child
      );
    case 14:
      return (
        (Component = workInProgress.type),
        (context = resolveDefaultProps(Component, workInProgress.pendingProps)),
        (context = resolveDefaultProps(Component.type, context)),
        updateMemoComponent(
          current,
          workInProgress,
          Component,
          context,
          renderLanes
        )
      );
    case 15:
      return updateSimpleMemoComponent(
        current,
        workInProgress,
        workInProgress.type,
        workInProgress.pendingProps,
        renderLanes
      );
    case 17:
      return (
        (Component = workInProgress.type),
        (context = workInProgress.pendingProps),
        (context =
          workInProgress.elementType === Component
            ? context
            : resolveDefaultProps(Component, context)),
        resetSuspendedCurrentOnMountInLegacyMode(current, workInProgress),
        (workInProgress.tag = 1),
        isContextProvider(Component)
          ? ((current = !0), pushContextProvider(workInProgress))
          : (current = !1),
        prepareToReadContext(workInProgress, renderLanes),
        constructClassInstance(workInProgress, Component, context),
        mountClassInstance(workInProgress, Component, context, renderLanes),
        finishClassComponent(
          null,
          workInProgress,
          Component,
          !0,
          current,
          renderLanes
        )
      );
    case 19:
      return updateSuspenseListComponent(current, workInProgress, renderLanes);
    case 22:
      return updateOffscreenComponent(current, workInProgress, renderLanes);
    case 24:
      return (
        prepareToReadContext(workInProgress, renderLanes),
        (Component = readContext(CacheContext)),
        null === current
          ? ((context = peekCacheFromPool()),
            null === context &&
              ((context = workInProgressRoot),
              (hasContext = createCache()),
              (context.pooledCache = hasContext),
              hasContext.refCount++,
              null !== hasContext && (context.pooledCacheLanes |= renderLanes),
              (context = hasContext)),
            (workInProgress.memoizedState = {
              parent: Component,
              cache: context
            }),
            initializeUpdateQueue(workInProgress),
            pushProvider(workInProgress, CacheContext, context))
          : (0 !== (current.lanes & renderLanes) &&
              (cloneUpdateQueue(current, workInProgress),
              processUpdateQueue(workInProgress, null, null, renderLanes)),
            (context = current.memoizedState),
            (hasContext = workInProgress.memoizedState),
            context.parent !== Component
              ? ((context = { parent: Component, cache: Component }),
                (workInProgress.memoizedState = context),
                0 === workInProgress.lanes &&
                  (workInProgress.memoizedState =
                    workInProgress.updateQueue.baseState =
                      context),
                pushProvider(workInProgress, CacheContext, Component))
              : ((Component = hasContext.cache),
                pushProvider(workInProgress, CacheContext, Component),
                Component !== context.cache &&
                  propagateContextChange(
                    workInProgress,
                    CacheContext,
                    renderLanes
                  ))),
        reconcileChildren(
          current,
          workInProgress,
          workInProgress.pendingProps.children,
          renderLanes
        ),
        workInProgress.child
      );
  }
  throw Error(
    "Unknown unit of work tag (" +
      workInProgress.tag +
      "). This error is likely caused by a bug in React. Please file an issue."
  );
};
function scheduleCallback(priorityLevel, callback) {
  return scheduleCallback$2(priorityLevel, callback);
}
function FiberNode(tag, pendingProps, key, mode) {
  this.tag = tag;
  this.key = key;
  this.sibling =
    this.child =
    this.return =
    this.stateNode =
    this.type =
    this.elementType =
      null;
  this.index = 0;
  this.refCleanup = this.ref = null;
  this.pendingProps = pendingProps;
  this.dependencies =
    this.memoizedState =
    this.updateQueue =
    this.memoizedProps =
      null;
  this.mode = mode;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
  this.actualDuration = 0;
  this.actualStartTime = -1;
  this.treeBaseDuration = this.selfBaseDuration = 0;
}
function createFiber(tag, pendingProps, key, mode) {
  return new FiberNode(tag, pendingProps, key, mode);
}
function shouldConstruct(Component) {
  Component = Component.prototype;
  return !(!Component || !Component.isReactComponent);
}
function resolveLazyComponentTag(Component) {
  if ("function" === typeof Component)
    return shouldConstruct(Component) ? 1 : 0;
  if (void 0 !== Component && null !== Component) {
    Component = Component.$$typeof;
    if (Component === REACT_FORWARD_REF_TYPE) return 11;
    if (Component === REACT_MEMO_TYPE) return 14;
  }
  return 2;
}
function createWorkInProgress(current, pendingProps) {
  var workInProgress = current.alternate;
  null === workInProgress
    ? ((workInProgress = createFiber(
        current.tag,
        pendingProps,
        current.key,
        current.mode
      )),
      (workInProgress.elementType = current.elementType),
      (workInProgress.type = current.type),
      (workInProgress.stateNode = current.stateNode),
      (workInProgress.alternate = current),
      (current.alternate = workInProgress))
    : ((workInProgress.pendingProps = pendingProps),
      (workInProgress.type = current.type),
      (workInProgress.flags = 0),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null),
      (workInProgress.actualDuration = 0),
      (workInProgress.actualStartTime = -1));
  workInProgress.flags = current.flags & 14680064;
  workInProgress.childLanes = current.childLanes;
  workInProgress.lanes = current.lanes;
  workInProgress.child = current.child;
  workInProgress.memoizedProps = current.memoizedProps;
  workInProgress.memoizedState = current.memoizedState;
  workInProgress.updateQueue = current.updateQueue;
  pendingProps = current.dependencies;
  workInProgress.dependencies =
    null === pendingProps
      ? null
      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
  workInProgress.sibling = current.sibling;
  workInProgress.index = current.index;
  workInProgress.ref = current.ref;
  workInProgress.refCleanup = current.refCleanup;
  workInProgress.selfBaseDuration = current.selfBaseDuration;
  workInProgress.treeBaseDuration = current.treeBaseDuration;
  return workInProgress;
}
function resetWorkInProgress(workInProgress, renderLanes) {
  workInProgress.flags &= 14680066;
  var current = workInProgress.alternate;
  null === current
    ? ((workInProgress.childLanes = 0),
      (workInProgress.lanes = renderLanes),
      (workInProgress.child = null),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.memoizedProps = null),
      (workInProgress.memoizedState = null),
      (workInProgress.updateQueue = null),
      (workInProgress.dependencies = null),
      (workInProgress.stateNode = null),
      (workInProgress.selfBaseDuration = 0),
      (workInProgress.treeBaseDuration = 0))
    : ((workInProgress.childLanes = current.childLanes),
      (workInProgress.lanes = current.lanes),
      (workInProgress.child = current.child),
      (workInProgress.subtreeFlags = 0),
      (workInProgress.deletions = null),
      (workInProgress.memoizedProps = current.memoizedProps),
      (workInProgress.memoizedState = current.memoizedState),
      (workInProgress.updateQueue = current.updateQueue),
      (workInProgress.type = current.type),
      (renderLanes = current.dependencies),
      (workInProgress.dependencies =
        null === renderLanes
          ? null
          : {
              lanes: renderLanes.lanes,
              firstContext: renderLanes.firstContext
            }),
      (workInProgress.selfBaseDuration = current.selfBaseDuration),
      (workInProgress.treeBaseDuration = current.treeBaseDuration));
  return workInProgress;
}
function createFiberFromTypeAndProps(
  type,
  key,
  pendingProps,
  owner,
  mode,
  lanes
) {
  var fiberTag = 2;
  owner = type;
  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
  else if ("string" === typeof type) fiberTag = 5;
  else
    a: switch (type) {
      case REACT_FRAGMENT_TYPE:
        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
      case REACT_STRICT_MODE_TYPE:
        fiberTag = 8;
        mode |= 8;
        0 !== (mode & 1) && (mode |= 16);
        break;
      case REACT_PROFILER_TYPE:
        return (
          (type = createFiber(12, pendingProps, key, mode | 2)),
          (type.elementType = REACT_PROFILER_TYPE),
          (type.lanes = lanes),
          (type.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
          type
        );
      case REACT_SUSPENSE_TYPE:
        return (
          (type = createFiber(13, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_SUSPENSE_LIST_TYPE:
        return (
          (type = createFiber(19, pendingProps, key, mode)),
          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
          (type.lanes = lanes),
          type
        );
      case REACT_OFFSCREEN_TYPE:
        return createFiberFromOffscreen(pendingProps, mode, lanes, key);
      case REACT_LEGACY_HIDDEN_TYPE:
      case REACT_SCOPE_TYPE:
      case REACT_CACHE_TYPE:
        return (
          (type = createFiber(24, pendingProps, key, mode)),
          (type.elementType = REACT_CACHE_TYPE),
          (type.lanes = lanes),
          type
        );
      default:
        if ("object" === typeof type && null !== type)
          switch (type.$$typeof) {
            case REACT_PROVIDER_TYPE:
              fiberTag = 10;
              break a;
            case REACT_CONTEXT_TYPE:
              fiberTag = 9;
              break a;
            case REACT_FORWARD_REF_TYPE:
              fiberTag = 11;
              break a;
            case REACT_MEMO_TYPE:
              fiberTag = 14;
              break a;
            case REACT_LAZY_TYPE:
              fiberTag = 16;
              owner = null;
              break a;
          }
        throw Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
            ((null == type ? type : typeof type) + ".")
        );
    }
  key = createFiber(fiberTag, pendingProps, key, mode);
  key.elementType = type;
  key.type = owner;
  key.lanes = lanes;
  return key;
}
function createFiberFromFragment(elements, mode, lanes, key) {
  elements = createFiber(7, elements, key, mode);
  elements.lanes = lanes;
  return elements;
}
function createFiberFromOffscreen(pendingProps, mode, lanes, key) {
  pendingProps = createFiber(22, pendingProps, key, mode);
  pendingProps.elementType = REACT_OFFSCREEN_TYPE;
  pendingProps.lanes = lanes;
  var primaryChildInstance = {
    _visibility: 1,
    _pendingVisibility: 1,
    _pendingMarkers: null,
    _retryCache: null,
    _transitions: null,
    _current: null,
    detach: function () {
      var fiber = primaryChildInstance._current;
      if (null === fiber)
        throw Error(
          "Calling Offscreen.detach before instance handle has been set."
        );
      if (0 === (primaryChildInstance._pendingVisibility & 2)) {
        var root = enqueueConcurrentRenderForLane(fiber, 2);
        null !== root &&
          ((primaryChildInstance._pendingVisibility |= 2),
          scheduleUpdateOnFiber(root, fiber, 2, -1));
      }
    },
    attach: function () {
      var fiber = primaryChildInstance._current;
      if (null === fiber)
        throw Error(
          "Calling Offscreen.detach before instance handle has been set."
        );
      if (0 !== (primaryChildInstance._pendingVisibility & 2)) {
        var root = enqueueConcurrentRenderForLane(fiber, 2);
        null !== root &&
          ((primaryChildInstance._pendingVisibility &= -3),
          scheduleUpdateOnFiber(root, fiber, 2, -1));
      }
    }
  };
  pendingProps.stateNode = primaryChildInstance;
  return pendingProps;
}
function createFiberFromText(content, mode, lanes) {
  content = createFiber(6, content, null, mode);
  content.lanes = lanes;
  return content;
}
function createFiberFromPortal(portal, mode, lanes) {
  mode = createFiber(
    4,
    null !== portal.children ? portal.children : [],
    portal.key,
    mode
  );
  mode.lanes = lanes;
  mode.stateNode = {
    containerInfo: portal.containerInfo,
    pendingChildren: null,
    implementation: portal.implementation
  };
  return mode;
}
function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onRecoverableError
) {
  this.tag = tag;
  this.containerInfo = containerInfo;
  this.finishedWork =
    this.pingCache =
    this.current =
    this.pendingChildren =
      null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = createLaneMap(0);
  this.expirationTimes = createLaneMap(-1);
  this.entangledLanes =
    this.errorRecoveryDisabledLanes =
    this.finishedLanes =
    this.mutableReadLanes =
    this.expiredLanes =
    this.pingedLanes =
    this.suspendedLanes =
    this.pendingLanes =
      0;
  this.entanglements = createLaneMap(0);
  this.hiddenUpdates = createLaneMap(null);
  this.identifierPrefix = identifierPrefix;
  this.onRecoverableError = onRecoverableError;
  this.pooledCache = null;
  this.pooledCacheLanes = 0;
  this.incompleteTransitions = new Map();
  this.passiveEffectDuration = this.effectDuration = 0;
}
function createContainer(
  containerInfo,
  tag,
  hydrationCallbacks,
  isStrictMode,
  concurrentUpdatesByDefaultOverride,
  identifierPrefix,
  onRecoverableError
) {
  containerInfo = new FiberRootNode(
    containerInfo,
    tag,
    !1,
    identifierPrefix,
    onRecoverableError
  );
  1 === tag
    ? ((tag = 1),
      !0 === isStrictMode && (tag |= 24),
      concurrentUpdatesByDefaultOverride && (tag |= 32))
    : (tag = 0);
  isDevToolsPresent && (tag |= 2);
  isStrictMode = createFiber(3, null, null, tag);
  containerInfo.current = isStrictMode;
  isStrictMode.stateNode = containerInfo;
  concurrentUpdatesByDefaultOverride = createCache();
  concurrentUpdatesByDefaultOverride.refCount++;
  containerInfo.pooledCache = concurrentUpdatesByDefaultOverride;
  concurrentUpdatesByDefaultOverride.refCount++;
  isStrictMode.memoizedState = {
    element: null,
    isDehydrated: !1,
    cache: concurrentUpdatesByDefaultOverride
  };
  initializeUpdateQueue(isStrictMode);
  return containerInfo;
}
function updateContainer(element, container, parentComponent, callback) {
  var current = container.current,
    eventTime = requestEventTime(),
    lane = requestUpdateLane(current);
  a: if (parentComponent) {
    parentComponent = parentComponent._reactInternals;
    b: {
      if (
        getNearestMountedFiber(parentComponent) !== parentComponent ||
        1 !== parentComponent.tag
      )
        throw Error(
          "Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue."
        );
      var JSCompiler_inline_result = parentComponent;
      do {
        switch (JSCompiler_inline_result.tag) {
          case 3:
            JSCompiler_inline_result =
              JSCompiler_inline_result.stateNode.context;
            break b;
          case 1:
            if (isContextProvider(JSCompiler_inline_result.type)) {
              JSCompiler_inline_result =
                JSCompiler_inline_result.stateNode
                  .__reactInternalMemoizedMergedChildContext;
              break b;
            }
        }
        JSCompiler_inline_result = JSCompiler_inline_result.return;
      } while (null !== JSCompiler_inline_result);
      throw Error(
        "Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    if (1 === parentComponent.tag) {
      var Component = parentComponent.type;
      if (isContextProvider(Component)) {
        parentComponent = processChildContext(
          parentComponent,
          Component,
          JSCompiler_inline_result
        );
        break a;
      }
    }
    parentComponent = JSCompiler_inline_result;
  } else parentComponent = emptyContextObject;
  null === container.context
    ? (container.context = parentComponent)
    : (container.pendingContext = parentComponent);
  container = createUpdate(eventTime, lane);
  container.payload = { element: element };
  callback = void 0 === callback ? null : callback;
  null !== callback && (container.callback = callback);
  element = enqueueUpdate(current, container, lane);
  null !== element &&
    (scheduleUpdateOnFiber(element, current, lane, eventTime),
    entangleTransitions(element, current, lane));
  return lane;
}
function emptyFindFiberByHostInstance() {
  return null;
}
var act = React.unstable_act,
  defaultTestOptions = {
    createNodeMock: function () {
      return null;
    }
  };
function toJSON(inst) {
  if (inst.isHidden) return null;
  switch (inst.tag) {
    case "TEXT":
      return inst.text;
    case "INSTANCE":
      var _inst$props = inst.props;
      var excluded = ["children"];
      if (null == _inst$props) _inst$props = {};
      else {
        var target = {},
          sourceKeys = Object.keys(_inst$props),
          i;
        for (i = 0; i < sourceKeys.length; i++) {
          var key = sourceKeys[i];
          0 <= excluded.indexOf(key) || (target[key] = _inst$props[key]);
        }
        _inst$props = target;
      }
      excluded = null;
      if (inst.children && inst.children.length)
        for (target = 0; target < inst.children.length; target++)
          (sourceKeys = toJSON(inst.children[target])),
            null !== sourceKeys &&
              (null === excluded
                ? (excluded = [sourceKeys])
                : excluded.push(sourceKeys));
      inst = { type: inst.type, props: _inst$props, children: excluded };
      Object.defineProperty(inst, "$$typeof", {
        value: Symbol.for("react.test.json")
      });
      return inst;
    default:
      throw Error("Unexpected node type in toJSON: " + inst.tag);
  }
}
function childrenToTree(node) {
  if (!node) return null;
  node = nodeAndSiblingsArray(node);
  return 0 === node.length
    ? null
    : 1 === node.length
    ? toTree(node[0])
    : flatten(node.map(toTree));
}
function nodeAndSiblingsArray(nodeWithSibling) {
  for (var array = []; null != nodeWithSibling; )
    array.push(nodeWithSibling), (nodeWithSibling = nodeWithSibling.sibling);
  return array;
}
function flatten(arr) {
  var result = [];
  for (arr = [{ i: 0, array: arr }]; arr.length; )
    for (var n = arr.pop(); n.i < n.array.length; ) {
      var el = n.array[n.i];
      n.i += 1;
      if (isArrayImpl(el)) {
        arr.push(n);
        arr.push({ i: 0, array: el });
        break;
      }
      result.push(el);
    }
  return result;
}
function toTree(node) {
  if (null == node) return null;
  switch (node.tag) {
    case 3:
      return childrenToTree(node.child);
    case 4:
      return childrenToTree(node.child);
    case 1:
      return {
        nodeType: "component",
        type: node.type,
        props: assign({}, node.memoizedProps),
        instance: node.stateNode,
        rendered: childrenToTree(node.child)
      };
    case 0:
    case 15:
      return {
        nodeType: "component",
        type: node.type,
        props: assign({}, node.memoizedProps),
        instance: null,
        rendered: childrenToTree(node.child)
      };
    case 26:
    case 27:
    case 5:
      return {
        nodeType: "host",
        type: node.type,
        props: assign({}, node.memoizedProps),
        instance: null,
        rendered: flatten(nodeAndSiblingsArray(node.child).map(toTree))
      };
    case 6:
      return node.stateNode.text;
    case 7:
    case 10:
    case 9:
    case 8:
    case 12:
    case 11:
    case 14:
    case 17:
    case 21:
      return childrenToTree(node.child);
    default:
      throw Error(
        "toTree() does not yet know how to handle nodes with tag=" + node.tag
      );
  }
}
var validWrapperTypes = new Set([0, 1, 5, 11, 14, 15, 3]);
function getChildren(parent) {
  var children = [],
    node = parent;
  if (null === node.child) return children;
  node.child.return = node;
  node = node.child;
  a: for (;;) {
    var descend = !1;
    validWrapperTypes.has(node.tag)
      ? children.push(wrapFiber(node))
      : 6 === node.tag
      ? children.push("" + node.memoizedProps)
      : (descend = !0);
    if (descend && null !== node.child)
      (node.child.return = node), (node = node.child);
    else {
      for (; null === node.sibling; ) {
        if (node.return === parent) break a;
        node = node.return;
      }
      node.sibling.return = node.return;
      node = node.sibling;
    }
  }
  return children;
}
var ReactTestInstance = (function () {
  function ReactTestInstance(fiber) {
    this._fiber = void 0;
    if (!validWrapperTypes.has(fiber.tag))
      throw Error(
        "Unexpected object passed to ReactTestInstance constructor (tag: " +
          fiber.tag +
          "). This is probably a bug in React."
      );
    this._fiber = fiber;
  }
  var _proto = ReactTestInstance.prototype;
  _proto._currentFiber = function () {
    var fiber = findCurrentFiberUsingSlowPath(this._fiber);
    if (null === fiber)
      throw Error(
        "Can't read from currently-mounting component. This error is likely caused by a bug in React. Please file an issue."
      );
    return fiber;
  };
  _proto.find = function (predicate) {
    return expectOne(
      this.findAll(predicate, { deep: !1 }),
      "matching custom predicate: " + predicate.toString()
    );
  };
  _proto.findByType = function (type) {
    return expectOne(
      this.findAllByType(type, { deep: !1 }),
      'with node type: "' + (getComponentNameFromType(type) || "Unknown") + '"'
    );
  };
  _proto.findByProps = function (props) {
    return expectOne(
      this.findAllByProps(props, { deep: !1 }),
      "with props: " + JSON.stringify(props)
    );
  };
  _proto.findAll = function (predicate) {
    return _findAll(
      this,
      predicate,
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
    );
  };
  _proto.findAllByType = function (type) {
    return _findAll(
      this,
      function (node) {
        return node.type === type;
      },
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
    );
  };
  _proto.findAllByProps = function (props) {
    return _findAll(
      this,
      function (node) {
        var JSCompiler_temp;
        if ((JSCompiler_temp = node.props))
          a: {
            for (var key in props)
              if (node.props[key] !== props[key]) {
                JSCompiler_temp = !1;
                break a;
              }
            JSCompiler_temp = !0;
          }
        return JSCompiler_temp;
      },
      1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null
    );
  };
  _createClass(ReactTestInstance, [
    {
      key: "instance",
      get: function () {
        var tag = this._fiber.tag;
        return 5 === tag || 26 === tag || 27 === tag
          ? getPublicInstance(this._fiber.stateNode)
          : this._fiber.stateNode;
      }
    },
    {
      key: "type",
      get: function () {
        return this._fiber.type;
      }
    },
    {
      key: "props",
      get: function () {
        return this._currentFiber().memoizedProps;
      }
    },
    {
      key: "parent",
      get: function () {
        for (var parent = this._fiber.return; null !== parent; ) {
          if (validWrapperTypes.has(parent.tag)) {
            if (3 === parent.tag && 2 > getChildren(parent).length) break;
            return wrapFiber(parent);
          }
          parent = parent.return;
        }
        return null;
      }
    },
    {
      key: "children",
      get: function () {
        return getChildren(this._currentFiber());
      }
    }
  ]);
  return ReactTestInstance;
})();
function _findAll(root, predicate, options) {
  var deep = options ? options.deep : !0,
    results = [];
  if (predicate(root) && (results.push(root), !deep)) return results;
  root.children.forEach(function (child) {
    "string" !== typeof child &&
      results.push.apply(results, _findAll(child, predicate, options));
  });
  return results;
}
function expectOne(all, message) {
  if (1 === all.length) return all[0];
  throw Error(
    (0 === all.length
      ? "No instances found "
      : "Expected 1 but found " + all.length + " instances ") + message
  );
}
function onRecoverableError(error) {
  console.error(error);
}
var fiberToWrapper = new WeakMap();
function wrapFiber(fiber) {
  var wrapper = fiberToWrapper.get(fiber);
  void 0 === wrapper &&
    null !== fiber.alternate &&
    (wrapper = fiberToWrapper.get(fiber.alternate));
  void 0 === wrapper &&
    ((wrapper = new ReactTestInstance(fiber)),
    fiberToWrapper.set(fiber, wrapper));
  return wrapper;
}
var devToolsConfig$jscomp$inline_1020 = {
  findFiberByHostInstance: function () {
    throw Error("TestRenderer does not support findFiberByHostInstance()");
  },
  bundleType: 0,
  version: "18.3.0-next-2cc54b57e-20230220",
  rendererPackageName: "react-test-renderer"
};
var internals$jscomp$inline_1192 = {
  bundleType: devToolsConfig$jscomp$inline_1020.bundleType,
  version: devToolsConfig$jscomp$inline_1020.version,
  rendererPackageName: devToolsConfig$jscomp$inline_1020.rendererPackageName,
  rendererConfig: devToolsConfig$jscomp$inline_1020.rendererConfig,
  overrideHookState: null,
  overrideHookStateDeletePath: null,
  overrideHookStateRenamePath: null,
  overrideProps: null,
  overridePropsDeletePath: null,
  overridePropsRenamePath: null,
  setErrorHandler: null,
  setSuspenseHandler: null,
  scheduleUpdate: null,
  currentDispatcherRef: ReactSharedInternals.ReactCurrentDispatcher,
  findHostInstanceByFiber: function (fiber) {
    fiber = findCurrentFiberUsingSlowPath(fiber);
    fiber = null !== fiber ? findCurrentHostFiberImpl(fiber) : null;
    return null === fiber ? null : fiber.stateNode;
  },
  findFiberByHostInstance:
    devToolsConfig$jscomp$inline_1020.findFiberByHostInstance ||
    emptyFindFiberByHostInstance,
  findHostInstancesForRefresh: null,
  scheduleRefresh: null,
  scheduleRoot: null,
  setRefreshHandler: null,
  getCurrentFiber: null,
  reconcilerVersion: "18.3.0-next-2cc54b57e-20230220"
};
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var hook$jscomp$inline_1193 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (
    !hook$jscomp$inline_1193.isDisabled &&
    hook$jscomp$inline_1193.supportsFiber
  )
    try {
      (rendererID = hook$jscomp$inline_1193.inject(
        internals$jscomp$inline_1192
      )),
        (injectedHook = hook$jscomp$inline_1193);
    } catch (err) {}
}
exports._Scheduler = Scheduler;
exports.act = act;
exports.create = function (element, options) {
  var createNodeMock = defaultTestOptions.createNodeMock,
    isConcurrent = !1,
    isStrictMode = !1,
    concurrentUpdatesByDefault = null;
  "object" === typeof options &&
    null !== options &&
    ("function" === typeof options.createNodeMock &&
      (createNodeMock = options.createNodeMock),
    !0 === options.unstable_isConcurrent && (isConcurrent = !0),
    !0 === options.unstable_strictMode && (isStrictMode = !0),
    void 0 !== options.unstable_concurrentUpdatesByDefault &&
      (concurrentUpdatesByDefault =
        options.unstable_concurrentUpdatesByDefault));
  var container = {
      children: [],
      createNodeMock: createNodeMock,
      tag: "CONTAINER"
    },
    root = createContainer(
      container,
      isConcurrent ? 1 : 0,
      null,
      isStrictMode,
      concurrentUpdatesByDefault,
      "",
      onRecoverableError
    );
  if (null == root) throw Error("something went wrong");
  updateContainer(element, root, null, null);
  element = {
    _Scheduler: Scheduler,
    root: void 0,
    toJSON: function () {
      if (
        null == root ||
        null == root.current ||
        null == container ||
        0 === container.children.length
      )
        return null;
      if (1 === container.children.length) return toJSON(container.children[0]);
      if (
        2 === container.children.length &&
        !0 === container.children[0].isHidden &&
        !1 === container.children[1].isHidden
      )
        return toJSON(container.children[1]);
      var renderedChildren = null;
      if (container.children && container.children.length)
        for (var i = 0; i < container.children.length; i++) {
          var renderedChild = toJSON(container.children[i]);
          null !== renderedChild &&
            (null === renderedChildren
              ? (renderedChildren = [renderedChild])
              : renderedChildren.push(renderedChild));
        }
      return renderedChildren;
    },
    toTree: function () {
      return null == root || null == root.current ? null : toTree(root.current);
    },
    update: function (newElement) {
      null != root &&
        null != root.current &&
        updateContainer(newElement, root, null, null);
    },
    unmount: function () {
      null != root &&
        null != root.current &&
        (updateContainer(null, root, null, null), (root = container = null));
    },
    getInstance: function () {
      if (null == root || null == root.current) return null;
      a: {
        var JSCompiler_inline_result = root.current;
        if (JSCompiler_inline_result.child)
          switch (JSCompiler_inline_result.child.tag) {
            case 27:
            case 5:
              JSCompiler_inline_result = getPublicInstance(
                JSCompiler_inline_result.child.stateNode
              );
              break a;
            default:
              JSCompiler_inline_result =
                JSCompiler_inline_result.child.stateNode;
          }
        else JSCompiler_inline_result = null;
      }
      return JSCompiler_inline_result;
    },
    unstable_flushSync: flushSync
  };
  Object.defineProperty(element, "root", {
    configurable: !0,
    enumerable: !0,
    get: function () {
      if (null === root)
        throw Error("Can't access .root on unmounted test renderer");
      var children = getChildren(root.current);
      if (0 === children.length)
        throw Error("Can't access .root on unmounted test renderer");
      return 1 === children.length ? children[0] : wrapFiber(root.current);
    }
  });
  return element;
};
exports.unstable_batchedUpdates = function (fn, a) {
  var prevExecutionContext = executionContext;
  executionContext |= 1;
  try {
    return fn(a);
  } finally {
    (executionContext = prevExecutionContext),
      0 === executionContext &&
        ((workInProgressRootRenderTargetTime = now$1() + 500),
        includesLegacySyncCallbacks && flushSyncCallbacks());
  }
};
