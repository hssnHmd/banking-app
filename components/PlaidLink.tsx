'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import {
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
  usePlaidLink,
} from 'react-plaid-link';
import {
  createLinkToken,
  exchangePublicToken,
} from '@/lib/actions/user.action';
import Image from 'next/image';

const PlaidLink = ({ user, variant }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    const getTokenLink = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };
    getTokenLink();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      await exchangePublicToken({
        publicToken: public_token,
        user,
      });
      router.push('/');
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };
  const { open, exit, ready } = usePlaidLink(config);
  return (
    <>
      {variant === 'primary' ? (
        <Button
          className="plaidlink-primary"
          onClick={() => open()}
          disabled={!ready}
        >
          Connect Bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button
          className="plaidlink-ghost"
          variant="ghost"
          onClick={() => open()}
        >
          <Image
            src="/icons/connect-bank.svg"
            width={24}
            height={24}
            alt="connext bank"
          />
          <p className=" hidden text-[16px] font-semibold text-black-2 xl:block ">
            Connect Bank
          </p>
        </Button>
      ) : (
        <Button className="plaidlink-default" onClick={() => open()}>
          <Image
            src="/icons/connect-bank.svg"
            width={24}
            height={24}
            alt="connext bank"
          />
          <p className="text-[16px] font-semibold text-black-2">Connect Bank</p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
