<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: vrp/block.proto

namespace GPBMetadata\Vrp;

class Block
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\Vrp\Transaction::initOnce();
        $pool->internalAddGeneratedFile(hex2bin(
            "0ada050a0f7672702f626c6f636b2e70726f746f120376727022e3020a05426c6f636b12210a0668656164657218012001280b32112e7672702e426c6f636b2e48656164657212110a097369676e617475726518022001280c122c0a0c7472616e73616374696f6e7318032003280b32162e7672702e5369676e65645472616e73616374696f6e1af5010a0648656164657212100a08636861696e5f696418012001280512110a097265666572656e636518022001280c12130a0b626173655f746172676574180320012803121c0a1467656e65726174696f6e5f7369676e617475726518042001280c12150a0d666561747572655f766f74657318052003280d12110a0974696d657374616d70180620012803120f0a0776657273696f6e18072001280512110a0967656e657261746f7218082001280c12130a0b7265776172645f766f746518092001280312150a0d7265776172645f6275726e6564180a2001280312190a117472616e73616374696f6e735f726f6f74180b2001280c229a010a0a4d6963726f426c6f636b120f0a0776657273696f6e18012001280512110a097265666572656e636518022001280c121f0a17757064617465645f626c6f636b5f7369676e617475726518032001280c12190a1173656e6465725f7075626c69635f6b657918042001280c122c0a0c7472616e73616374696f6e7318052003280b32162e7672702e5369676e65645472616e73616374696f6e22630a105369676e65644d6963726f426c6f636b12240a0b6d6963726f5f626c6f636b18012001280b320f2e7672702e4d6963726f426c6f636b12110a097369676e617475726518022001280c12160a0e746f74616c5f626c6f636b5f696418032001280c42520a16636f6d2e7672702e70726f746f6275662e626c6f636b5a326769746875622e636f6d2f655645535458434f494e2f676f7672702f706b672f677270632f67656e6572617465642f767270aa0203565250620670726f746f33"
        ), true);

        static::$is_initialized = true;
    }
}

