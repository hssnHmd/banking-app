'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { StyledString } from 'next/dist/build/swc';
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
        <Button>Connect Bank</Button>
      ) : (
        <Button>Connect Bank</Button>
      )}
    </>
  );
};

export default PlaidLink;
