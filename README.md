# TestBlock
- blockchain study 를 위해 개발중인 test blockchain

# test 환경
- windows10
- node 10.15.3
- npm 6.4.1

# dependency module
- express
- bitcoinlib-js
- mocha
- node-express-json-rpc2-async

# install
- nodeJS version 10 이상 설치 필요
    - https://nodejs.org/ko/download/
- windows build 도구 설치
    - npm install --global windows-build-tools
    - https://www.npmjs.com/package/windows-build-tools
- project download
    - git clone https://github.com/leeheejoo/TestBlock.git
- dependency module 설치
    - npm install
- test module 설치
    - npm install mocha --global

# 실행
- npm start

# test
- mocha

# project 특징
- 기능
    - account 생성 기능 (account 기반, not utxo)
    - transaction 생성 기능
        - transfer 기능
        - transaction sign 기능 미구현
    - block 생성 기능
        - generateBlock rpc 호출로 생성
    - block 검증 기능
        - genensys block 부터 chain을 다시 생성하여 기존어 저장된 block hash값을 비교하여 검증
    - consensus 알고리즘
        - pow 사용

# apis
    - json-rpc2, post-type, request시 header에 Content-Type : application/json 추가 필요

    - getCoinbaseAddress
        - coinbase address를 조회함
        - header
            - Content-Type : application/json
        - parameter
            -
        - result 
            - coinbase address or error
        - example
            - request
                { 
                    "jsonrpc": "2.0", 
                    "method": "getCoinbaseAddress", 
                    "id": "1"
                }
            - response
                {
                    "jsonrpc": "2.0",
                    "id": "1",
                    "result": {
                        "address": "1NBaNVXqcLTFNJ3vdVrdaWJ8eMjkAYixgz"
                    }
                }
